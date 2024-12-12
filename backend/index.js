import express from "express";
import { router } from "./routers/users.js";
import { dbConnect } from "./mongoDB/connecetDB.js";
const app = express();
app.use(express.json());

const PORT = 4000;

try {
  app.get("/", (req, res) => res.send("curd is running"));
  app.listen(PORT, () => console.log("backend is running"), PORT);
  app.use("/user", router);
  dbConnect();
} catch (error) {
  console.log("🚀 ~ error:", error.message);
}
