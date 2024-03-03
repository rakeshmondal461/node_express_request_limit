import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // maximum number of requests allowed in the windowMs
  message: "Too many requests, please try again later.",
  keyGenerator: function (req, res) {
    // Using client's IP instead of server IP
    const clientIP =
      (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
      req.socket.remoteAddress;
    return clientIP;
  },
});

export default limiter;
