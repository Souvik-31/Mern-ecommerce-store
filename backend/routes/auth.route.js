import express from "express";
import { signup, login, logout, refreshToken, getProfile, loginGuest, loginGuestAdmin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", getProfile);
router.post("/guest", loginGuest);
router.post("/guest-admin", loginGuestAdmin);


export default router;