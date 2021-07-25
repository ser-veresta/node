import express from "express";
import mongoose from "mongoose";
import { User } from "./models/users.js";
const app = express();
const PORT = 5000;

const users = [
  {
    name: "a",
    id: 1,
  },
  {
    name: "b",
    id: 2,
  },
];

const url = "mongodb://localhost/movieData";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("mongodb is connected");
});

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello, welcome to test server");
});

app.get("/users", async (request, response) => {
  const Users = await User.find();
  response.send(Users);
});

app.get("/:id", (request, response) => {
  const { id } = request.params;
  const user = users.find((ele) => ele.id === parseInt(id));
  response.send(user);
});

app.post("/users", (request, response) => {
  const newUser = request.body;
  console.log(newUser);
  response.send("done");
});

app.listen(PORT, () => console.log(`server running in PORT:${PORT}`));
