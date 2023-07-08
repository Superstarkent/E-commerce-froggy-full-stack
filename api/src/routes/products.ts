import { Router } from "express"

import { createProduct, getProductById, getProducts } from "../controllers/products"

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

export default router