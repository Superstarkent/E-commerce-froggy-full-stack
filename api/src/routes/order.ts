import { Router } from "express";
import { createOrder, getUserOrders } from "../controllers/order";

const router = Router();

router.post("/", createOrder);
router.get("/user/:userId", getUserOrders);
export default router;
