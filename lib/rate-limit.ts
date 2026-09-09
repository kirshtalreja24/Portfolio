export interface RateLimiter {
  isRateLimited(key: string): boolean;
}

const DEFAULT_WINDOW_MS = 60_000;
const DEFAULT_MAX = 3;

/**
 * In-memory adapter. State is per server instance — on Vercel's serverless
 * functions that means the limit doesn't coordinate across cold starts, only
 * within one warm instance. Accepted for now; swap in a shared-storage
 * adapter behind this same interface if that gap becomes a real problem.
 */
export function createInMemoryRateLimiter(
  windowMs = DEFAULT_WINDOW_MS,
  max = DEFAULT_MAX
): RateLimiter {
  const hits = new Map<string, number[]>();

  return {
    isRateLimited(key: string): boolean {
      const now = Date.now();
      const timestamps = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
      timestamps.push(now);
      hits.set(key, timestamps);
      return timestamps.length > max;
    },
  };
}
