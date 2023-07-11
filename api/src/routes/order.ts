import { Router } from "express";
import { createOrder, getUserOrdersId } from "../controllers/order";

const router = Router();

router.post("/", createOrder);
router.get("/:userId", getUserOrdersId);
export default router;
