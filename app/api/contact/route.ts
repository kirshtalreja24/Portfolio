import { NextRequest, NextResponse } from "next/server";
import { checkHoneypot, sendContactEmail, validateContactPayload } from "@/lib/contact";
import { createInMemoryRateLimiter } from "@/lib/rate-limit";

const rateLimiter = createInMemoryRateLimiter();

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (rateLimiter.isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again in a minute." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (checkHoneypot(body)) {
    return NextResponse.json({ ok: true });
  }

  const validation = validateContactPayload(body);
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const result = await sendContactEmail(validation.data);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
