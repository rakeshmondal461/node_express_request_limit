const apiController = {
  getData(req, res) {
    const clientIP =
      (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
      req.socket.remoteAddress;
    console.log(`request from ip => ${clientIP}`);
    res.json({ data: "welcome to rate limiting in node.js apis" });
  },
};

export default apiController;
