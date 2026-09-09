import { describe, expect, it } from "vitest";
import { createInMemoryRateLimiter } from "./rate-limit";

describe("createInMemoryRateLimiter", () => {
  it("allows requests under the limit", () => {
    const limiter = createInMemoryRateLimiter(60_000, 3);

    expect(limiter.isRateLimited("ip-1")).toBe(false);
    expect(limiter.isRateLimited("ip-1")).toBe(false);
    expect(limiter.isRateLimited("ip-1")).toBe(false);
  });

  it("blocks once a key exceeds the limit within the window", () => {
    const limiter = createInMemoryRateLimiter(60_000, 3);

    limiter.isRateLimited("ip-1");
    limiter.isRateLimited("ip-1");
    limiter.isRateLimited("ip-1");

    expect(limiter.isRateLimited("ip-1")).toBe(true);
  });

  it("tracks keys independently", () => {
    const limiter = createInMemoryRateLimiter(60_000, 1);

    limiter.isRateLimited("ip-1");
    expect(limiter.isRateLimited("ip-2")).toBe(false);
  });

  it("stops counting hits once they age out of the window", async () => {
    const limiter = createInMemoryRateLimiter(10, 1);

    limiter.isRateLimited("ip-1");
    await new Promise((resolve) => setTimeout(resolve, 20));

    expect(limiter.isRateLimited("ip-1")).toBe(false);
  });
});
