import restrict from "../middleware/restrict.js";
import { Router } from "express";
import {
  getDogs,
  getUserDogs,
  getDog,
  createDog,
  likeDog,
  updateDog,
  deleteDog,
} from "../controllers/dogs.js";

const router = Router();

router.get("/", getDogs); // All dogs minus current user's dogs (filtered)
router.get("/userdogs", getUserDogs); // All dogs pertaining to current user
router.get("/:id", getDog);
router.post("/", createDog);
router.put("/:id", restrict, updateDog);
router.post("/delete/:dogId", restrict, deleteDog);
router.put("/like/:id", restrict, likeDog);

export default router;
