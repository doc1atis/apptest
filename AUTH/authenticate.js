const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  jwt.verify(
    req.get("authorization-x-token"),
    process.env.JWT_SECRET,
    (err, payload) => {
      req.userId = payload.id;
      if (err) {
        res.status(401).json({ verified: false });
      } else {
        next();
      }
    }
  );
};
