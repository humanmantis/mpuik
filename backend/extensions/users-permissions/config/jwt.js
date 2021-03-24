module.exports = {
  jwtSecret: process.env.JWT_SECRET || "8d0e8029-a5fb-487a-9a90-f077a1a01e90",
  jwt: {
    expiresIn: "1d",
  }
};
