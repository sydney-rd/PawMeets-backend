import mongoose, { Schema } from "mongoose";

const DogBreedsSchema = new Schema({
  name: String
})

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
  breed: { type: Schema.Types.ObjectId, ref: "dogBreeds" },  
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


const DogBreedsModel = mongoose.model("dogBreeds", DogBreedsSchema);
const Dog = mongoose.model("dogs", DogSchema);
export {DogBreedsModel, Dog}


