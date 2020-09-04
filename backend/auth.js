const express = require("express");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");

const JWT_SECRET = "TOP_SECRET";

const users = [];
authRoutes.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => {
    return u.email === email && u.password === password;
  });

  if (user) {
    const token = jwt.sign({ user: user.email }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    res.send("Invalid credentials");
  }
});

authRoutes.post("/signup", (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };

  users.push(newUser);

  res.send("User succesfully created!");
});

module.exports = authRoutes;
