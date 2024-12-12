import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
});

export const userModal = mongoose.model("users", userSchema);
