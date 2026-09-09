export type SubmitContactResult = { ok: true } | { ok: false; error: string };

export async function submitContact(
  data: Record<string, FormDataEntryValue>
): Promise<SubmitContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { ok: false, error: body.error ?? "Something went wrong. Try again." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Something went wrong." };
  }
}
