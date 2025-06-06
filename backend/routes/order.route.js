import express from "express";
import Order from "../models/order.model.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Get all orders for the logged-in user
router.get("/my-orders", protectRoute, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .populate("products.product")
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch orders" });
    }
});

export default router;