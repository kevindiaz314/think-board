import { RateLimiter } from "../config/upstash.js";

export const RateLimit = async (req, res, next) => {
  const { success } = await RateLimiter.limit(req.ip);
  if (!success) {
    return res.status(429).json({ message: "Too many requests" });
  }
  next();
};
