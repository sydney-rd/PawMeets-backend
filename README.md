# PawMeets™

## About

PawMeets™ is a dog dating app that helps dogs find compatible partners in New York City. The app showcases dog profiles with their picture and an about me section that allows them to share their personalities. They can swipe through profiles of NYC's finest dogs and match with those they think would be a good fit. PawMeets™ allows pet owners to create a new profile for a pet, edit, or delete their profiles. PawMeets™ promises to provide a user-friendly experience with seamless UI/UX that will enable pet owners to discover ideal matches for their dogs. 🐶 ♡

PawMeets™ uses MongoDB and Express on the backend

PawMeets™ is deployed on [Railway](https://paw-meets-api-production.up.railway.app/)

I will be adding more fun things to my README soon!

## Backend Functionality

The backend of PawMeets™ uses the following:

MongoDB: A NoSQL database used to store and manage data.
Express.js: A backend web application framework for Node.js, used to build the server and handle routing.
Node.js: A JavaScript runtime used to execute server-side code.

## Object Content

```const DogSchema = new Schema({
  breed: [
    {
      type: String,
      enum: [
         breed list
      ],
    },
  ],
  name: { type: String },
  age: { type: String },
  about: { type: String },
  gender: { type: String },
  image: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: "dogs" }],
  user: { type: Schema.Types.ObjectId, ref: "users" },
});

 const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {type: String},
  password_digest: { type: String, required: true, select: false },
});

```

## Frontend Functionality

The frontend of PawMeets™ uses the following:

- React: Used to create interactive UI components and manage the state and rendering of these components.
- CSS: (Cascading Style Sheets) A stylesheet language used to define the visual presentation of HTML elements on a webpage.

The GitHub frontend link is found [HERE](https://github.com/sydney-rd/paw-meets)
