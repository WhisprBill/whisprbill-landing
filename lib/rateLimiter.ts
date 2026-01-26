// lib/rateLimiter.ts

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store (resets on server restart, good enough for now)
const ipStore = new Map<string, RateLimitEntry>();

const RATE_LIMIT = 10; // requests per window
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const entry = ipStore.get(ip);

  // No entry or window expired - create new
  if (!entry || now > entry.resetTime) {
    const resetTime = now + WINDOW_MS;
    ipStore.set(ip, { count: 1, resetTime });
    return { allowed: true, remaining: RATE_LIMIT - 1, resetTime };
  }

  // Increment count
  entry.count++;

  // Check if over limit
  if (entry.count > RATE_LIMIT) {
    return { allowed: false, remaining: 0, resetTime: entry.resetTime };
  }

  return {
    allowed: true,
    remaining: RATE_LIMIT - entry.count,
    resetTime: entry.resetTime,
  };
}

// Cleanup old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of ipStore.entries()) {
    if (now > entry.resetTime) {
      ipStore.delete(ip);
    }
  }
}, 10 * 60 * 1000);
