import { afterEach, describe, expect, it, vi } from "vitest";
import { checkHoneypot, sendContactEmail, validateContactPayload } from "./contact";

describe("checkHoneypot", () => {
  it("flags a filled honeypot field as a bot", () => {
    expect(checkHoneypot({ company: "Acme Bots" })).toBe(true);
  });

  it("does not flag an empty honeypot field", () => {
    expect(checkHoneypot({ company: "" })).toBe(false);
  });

  it("does not flag a missing honeypot field", () => {
    expect(checkHoneypot({})).toBe(false);
  });
});

describe("validateContactPayload", () => {
  const valid = { name: "Peter Parker", email: "peter@stark.com", message: "Hello" };

  it("accepts a well-formed payload", () => {
    const result = validateContactPayload(valid);
    expect(result).toEqual({ valid: true, data: valid });
  });

  it("rejects a missing name", () => {
    const result = validateContactPayload({ ...valid, name: "" });
    expect(result.valid).toBe(false);
  });

  it("rejects a missing message", () => {
    const result = validateContactPayload({ ...valid, message: "" });
    expect(result.valid).toBe(false);
  });

  it("rejects a malformed email", () => {
    const result = validateContactPayload({ ...valid, email: "not-an-email" });
    expect(result.valid).toBe(false);
  });

  it("rejects non-string fields", () => {
    const result = validateContactPayload({ ...valid, name: 123 });
    expect(result.valid).toBe(false);
  });
});

describe("sendContactEmail", () => {
  const payload = { name: "Peter Parker", email: "peter@stark.com", message: "Hello" };

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("logs and reports success when Resend credentials are not configured", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    vi.stubEnv("RESEND_TO_EMAIL", "");
    const fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);

    const result = await sendContactEmail(payload);

    expect(result).toEqual({ ok: true });
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("sends via Resend and reports success on a 2xx response", async () => {
    vi.stubEnv("RESEND_API_KEY", "test-key");
    vi.stubEnv("RESEND_TO_EMAIL", "me@example.com");
    const fetchSpy = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchSpy);

    const result = await sendContactEmail(payload);

    expect(result).toEqual({ ok: true });
    expect(fetchSpy).toHaveBeenCalledWith(
      "https://api.resend.com/emails",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("reports failure when Resend responds with a non-2xx status", async () => {
    vi.stubEnv("RESEND_API_KEY", "test-key");
    vi.stubEnv("RESEND_TO_EMAIL", "me@example.com");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));

    const result = await sendContactEmail(payload);

    expect(result).toEqual({ ok: false, error: "Failed to send message." });
  });
});
