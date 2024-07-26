const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware");


router.get("/", authMiddleware, (req, res) => res.send(req.user));
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
