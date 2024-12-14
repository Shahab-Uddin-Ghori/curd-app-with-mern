import { error } from "console";
import express from "express";
import { userModal } from "../mongoDB/models/userModals.js";
export const router = express.Router();

// get response
router.get("/", async (req, res) => {
  try {
    const users = await userModal.find();
    res.json({
      status: 200,
      message: "user data fetch successfully",
      users: users,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// put req
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userObj = req.body;
    const updateUser = await userModal.findByIdAndUpdate(id, userObj);
    await updateUser.save();
    res.json({
      status: 200,
      message: "user update sucessfully",
      updateUser: updateUser,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// post
router.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    const users = await userModal(newUser);
    users.save();
    res.json({
      status: 201,
      message: "user added successfully",
      users: users,
    });
  } catch (error) {
    console.log("🚀 ~ router.post ~ error:", error.message);
  }
});

// delte
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModal.findByIdAndDelete(id);
    res.json({
      status: 200,
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log("🚀 ~ router.delete ~ error:", error.message);
  }
});
