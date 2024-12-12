import mongoose, { mongo } from "mongoose";
import "dotenv/config";

export async function dbConnect() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    // .then(() => console.log("DB CONNECT"))
    // .catch((err) => console.log("db not connect", erq));
    //   if (mongoose.connection.readyState) {
    //     console.log("DASH Connect");
    //   } else {
    //     console.log("Nikal");
    //   }
    .then(() => console.log("mongoDB is connected"))
    .catch((error) => console.log(error));
}
