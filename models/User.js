import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {type: String},
  password_digest: { type: String, required: true, select: false },
});

export default mongoose.model("users", UserSchema);
