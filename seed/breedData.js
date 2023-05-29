import axios from 'axios'
import db from "../db/connection.js";
import { DogBreedsModel } from "../models/Dog.js"

const fetchDogBreeds = async () => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch dog breed data");
  }
};

const insertData = async () => {
//   await db.dropCollection("dogBreeds");

  const dogBreedData = await fetchDogBreeds();
  console.log("Dog breed data", dogBreedData);
  const dogBreeds = Object.keys(dogBreedData).map((breed) => ({
    name: breed,
  }));
  console.log(dogBreeds);
  try {
    await DogBreedsModel.insertMany(dogBreeds);
    console.log("Data inserted successfully!");
  } catch (error) {
    console.error(error);
  }
};

insertData()