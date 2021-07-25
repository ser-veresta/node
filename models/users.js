import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  id: Number,
});

export const User = mongoose.model("movie", userSchema);
