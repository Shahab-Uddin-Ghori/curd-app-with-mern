import express from "express";
import { router } from "./routers/users.js";
import { dbConnect } from "./mongoDB/connecetDB.js";
import "dotenv/config";
const app = express();
app.use(express.json());

const PORT = process.env.LOCAL_PORT;

try {
  app.get("/", (req, res) => res.send("curd is running"));
  app.listen(PORT, () => console.log("backend is running"), PORT);
  dbConnect();
  app.use("/user", router);
} catch (error) {
  console.log("🚀 ~ error:", error.message);
}
