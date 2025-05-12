import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ ok: false, message: "Invalid or token not found" });
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (
    payload.email === process.env.ADMIN_EMAIL &&
    payload.password === process.env.ADMIN_PASSWORD
  ) {
    next();
  } else {
    return res.json({ ok: false, message: "Invalid Credentials" });
  }
};

export default adminAuth;
