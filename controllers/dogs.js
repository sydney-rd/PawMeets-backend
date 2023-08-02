import Dog from "../models/Dog.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

let TOKEN_KEY = "thisisastring";

export const getDogs = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, TOKEN_KEY);
    const likedDogs = await Dog.find({ likes: user.id }, { _id: 1 });
    const dogs = await Dog.find({
      user: { $ne: user.id },
      _id: { $nin: likedDogs.map((dog) => dog._id) },
    }).populate("user");

    res.json(dogs);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getUserDogs = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, TOKEN_KEY);
    console.log(user);

    const dogs = await Dog.find({ user: { $eq: user.id } });
    res.json(dogs);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getDog = async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await Dog.findById(id).populate("likes");
    res.json(dog);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getUserDogsMatches = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, TOKEN_KEY);
    const dogs = await Dog.find({ user: { $eq: user.id } }).populate("likes");

    /** @type {[{dog: Dog, matches: [Dog]}]} */
    const data = [];

    for (let i = 0; i < dogs.length; i++) {
      const dog = dogs[i];

      const match = {
        dog: dog,
        matches: [],
      };
      data.push(match);

      for (let j = 0; j < dog.likes.length; j++) {
        const liked = dog.likes[i];

        // If this is a match...
        if (liked.likes.includes(dog.id)) {
          match.matches.push(liked);
        }
      }
    }

    res.json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createDog = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, TOKEN_KEY);

    const dog = new Dog({
      ...req.body,
      user: user.id,
    });

    await dog.save();

    res.status(201).json(dog);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateDog = async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await Dog.findByIdAndUpdate(id, req.body);
    res.status(201).json(dog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteDog = async (req, res) => {
  try {
    const { dogId } = req.params;

    const deleted = await Dog.findByIdAndDelete(dogId);

    if (deleted) {
      return res.status(200).send("Dog Deleted!");
    }

    throw new Error("Dog not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const likeDog = async (req, res) => {
  try {
    const { id } = req.params;

    const dog = await Dog.findByIdAndUpdate(
      id,
      { $addToSet: { likes: req.body.likedDog } },
      { new: true }
    );

    res.status(201).json(dog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const messageDog = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;

    const dog = await Dog.findByIdAndUpdate(id, {
      $push: { messages: message },
    });

    res.status(201).json(dog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
