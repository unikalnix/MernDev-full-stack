import jwt from "jsonwebtoken";

const adminLogin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ ok: false, message: "All fields are required" });
  }

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET_KEY);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return res.json({ ok: true, message: "Admin authenticated" });
  }

  return res.json({ ok: false, message: "Invalid Credentials" });
};

const adminLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ ok: true, message: "Admin logout" });
  } catch (error) {
    return res.json({ ok: false, message: error.message });
  }
};

export { adminLogin, adminLogout };
