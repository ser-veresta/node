import express from "express";
import { Users } from "../models/users.js";

const router = express.Router();

router
  .route("/")
  .get(async (request, response) => {
    const users = await Users.find();
    response.send(users);
  })
  .post((request, response) => {
    const newUsers = request.body;
    newUsers.forEach(async (newUser) => {
      const addUser = new Users(newUser);
      await addUser.save();
    });
    response.send("done");
  });

router
  .route("/:id")
  .get(async (request, response) => {
    const { id } = request.params;
    const user = await Users.findOne({ id: id });
    response.send(user);
  })
  .delete(async (request, response) => {
    const { id } = request.params;
    const user = await Users.findOne({ id: id });
    await Users.findByIdAndRemove(user._id);
    response.send(user);
  });

export default router;
