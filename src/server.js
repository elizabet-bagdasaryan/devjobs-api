import express from "express";
import { router } from "./routes/jobRoutes.js";
import { connection } from "./config/mongo.js";
import dotenv from "dotenv";
import swaggerMiddleware from "./middleware/swagger-middleware.js";

const app = express();

dotenv.config();
connection();


  app.use("/img", express.static("public/images"));
  app.use("/jobs", router);


  app.use("/", ...swaggerMiddleware());
  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });

