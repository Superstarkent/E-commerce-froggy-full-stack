import mongoose from "mongoose"
import dotenv from "dotenv"

import app from "./app";

dotenv.config();

const port = 3001;

mongoose
.connect(process.env.MONGODB_URI as string)
.then(() => { app.listen(port, () => {
    console.log(`server is running at port ${port} ribbit`);
});})
.catch((error: Error) => {
    console.log(
      "MongDB connection error. Please make sure ya database is running ribbit");
      process.exit(1);
})
