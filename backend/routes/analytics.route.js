import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { getAnalyticsData, getDailySalesData } from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, async (req, res) => {
	try {
		const analyticsData = await getAnalyticsData();

		const { range } = req.query;
		const endDate = new Date();
		let startDate = new Date();

		if (range === "30days") {
			startDate.setDate(startDate.getDate() - 30);
		} else if (range === "1year") {
			startDate.setFullYear(startDate.getFullYear() - 1);
		} else {
			startDate.setDate(startDate.getDate() - 7);
		}

		const dailySalesData = await getDailySalesData(startDate, endDate);

		res.json({
			analyticsData,
			dailySalesData,
		});
	} catch (error) {
		console.log("Error in analytics route", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
});

export default router;