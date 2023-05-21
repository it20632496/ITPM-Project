import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
});

export const User = mongoose.model("users", UserSchema);
