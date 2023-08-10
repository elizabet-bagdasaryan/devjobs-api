import express from "express";
import { router } from "./routes/jobRoutes.js";
import { connection } from "./config/mongo.js";
import dotenv from "dotenv";


const app = express();

dotenv.config();
connection();


  app.use("/img", express.static("public/images"));
  app.use("/jobs", router);

  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });

