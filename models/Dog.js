import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  content: { type: String },
  date: { type: Date },
  dogId: { type: Schema.Types.ObjectId}
})

const ConversationSchema = new Schema({
  currentDogId: { type: Schema.Types.ObjectId, ref: "dogs" },
  likedDogId: { type: Schema.Types.ObjectId, ref: "dogs"},
  messages: [ MessageSchema ]
})

const DogSchema = new Schema({
  breed: [{ type: String }],  
  name: { type: String },
  age: { type: String },
  about: { type: String },
  gender: { type: String },
  personality: [{ type: String }],
  image: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: "dogs" }],
  user: { type: Schema.Types.ObjectId, ref: "users" },
  conversation: [ ConversationSchema ]
});

export default mongoose.model("dogs", DogSchema);

