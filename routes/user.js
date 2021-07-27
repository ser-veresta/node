import express from "express";
import { Users } from "../models/users.js";

const router = express.Router();

router.get("/", async (request, response) => {
  const users = await Users.find();
  response.send(users);
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const user = await Users.findOne({ id: id });
  response.send(user);
});

router.post("/", async (request, response) => {
  const newUser = request.body;
  const addUser = new Users(newUser);
  await addUser.save();
  response.send("done");
});

router.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const user = await Users.findOne({ id: id });
  await Users.findByIdAndRemove(user._id);
  response.send(user);
});

export default router;
