import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DogSchema = new Schema({
  breed: { type: String },
  name: { type: String },
  age: { type: String },
  about: { type: String },
  gender: { type: String },
  personality: { type: [String] },
  image: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: "dogs" }],
  user: { type: Schema.Types.ObjectId, ref: "users" },
  messages: { type: [String] }
});

export default mongoose.model("dogs", DogSchema);
