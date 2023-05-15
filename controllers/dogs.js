import jwt from "jsonwebtoken";
import Dog from "../models/Dog.js";
import dotenv from "dotenv";
dotenv.config();

let TOKEN_KEY = "thisisastring";

export const getDogs = async (req, res) => {
  try {
    console.log(req.headers)
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, TOKEN_KEY);

    const dogs = await Dog.find({ user: { $ne: user.id } }).populate("user");
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
    console.log(user)

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

export const createDog = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.TOKEN_KEY);

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
