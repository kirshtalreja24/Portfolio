import { afterEach, describe, expect, it, vi } from "vitest";
import { submitContact } from "./contact-client";

describe("submitContact", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns ok on a successful submission", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));

    const result = await submitContact({ name: "Peter", email: "peter@stark.com", message: "Hi" });

    expect(result).toEqual({ ok: true });
  });

  it("returns the server's error message on a failed submission", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({ error: "Too many requests. Try again in a minute." }),
      })
    );

    const result = await submitContact({ name: "Peter", email: "peter@stark.com", message: "Hi" });

    expect(result).toEqual({ ok: false, error: "Too many requests. Try again in a minute." });
  });

  it("falls back to a generic error when the server response has no body", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, json: () => Promise.reject(new Error("no body")) })
    );

    const result = await submitContact({ name: "Peter", email: "peter@stark.com", message: "Hi" });

    expect(result).toEqual({ ok: false, error: "Something went wrong. Try again." });
  });

  it("returns a generic error when the request itself throws", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network down")));

    const result = await submitContact({ name: "Peter", email: "peter@stark.com", message: "Hi" });

    expect(result).toEqual({ ok: false, error: "Something went wrong." });
  });
});
