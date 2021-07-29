import express, { request } from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 5000;
const url = process.env.MONGODB_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("mongodb is connected");
});

app.use(express.json());

app.get("/", (request, response) => {
  response.send(url);
});

app.use("/users", userRouter);

app.listen(PORT, () => console.log(`server running in PORT:${PORT}`));
