import "dotenv/config";
import mongoose from "mongoose";

export async function dbConnect() {
  // if (!process.env.MONGODB_URI) {
  //   console.log("MONGODB_URI is undefined");
  //   return;
  // }

  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("mongoDB is connected"))
    .catch((error) => console.log(error));
}
