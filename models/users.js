import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    id: Number,
  },
  { versionKey: false }
);

export const Users = mongoose.model("user", userSchema);
