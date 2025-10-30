import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import dotenvx from "@dotenvx/dotenvx";

// Load environment variables
dotenvx.config();

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Rate limit the API requests to 10 requests per 10 seconds
export const RateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "10s"),
});
