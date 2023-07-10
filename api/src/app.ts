// server here
import Express from "express";
import cors from "cors";

import productRouter from "./routes/products"
import userRouter from "./routes/users";
import apiErrorHandler from "./middlewares/apiErrorHandler";
import order from "./routes/order"

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/orders", order);

app.use(apiErrorHandler);

export default app;