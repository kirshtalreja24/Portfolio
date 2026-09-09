export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ValidationResult =
  | { valid: true; data: ContactPayload }
  | { valid: false; error: string };

export type SendEmailResult = { ok: true } | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** A filled honeypot field means a bot submitted the form — real users never see or fill it. */
export function checkHoneypot(body: Record<string, unknown>): boolean {
  const company = body.company;
  return typeof company === "string" && company.trim() !== "";
}

export function validateContactPayload(body: Record<string, unknown>): ValidationResult {
  const { name, email, message } = body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 1 ||
    message.trim().length < 1 ||
    !EMAIL_PATTERN.test(email)
  ) {
    return { valid: false, error: "Please fill in all fields correctly." };
  }

  return { valid: true, data: { name, email, message } };
}

export async function sendContactEmail(payload: ContactPayload): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.info("[contact] RESEND_API_KEY not set — logging submission instead:", payload);
    return { ok: true };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: payload.email,
      subject: `New portfolio message from ${payload.name}`,
      text: payload.message,
    }),
  });

  if (!res.ok) {
    return { ok: false, error: "Failed to send message." };
  }

  return { ok: true };
}
