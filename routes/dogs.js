import restrict from "../middleware/restrict.js";
import { Router } from "express";
import {
  getDogs,
  getUserDogs,
  getDog,
  createDog,
  likeDog,
  messageDog,
  updateDog,
  deleteDog,
} from "../controllers/dogs.js";

const router = Router();

router.get("/", getDogs); // All dogs minus current user's dogs (filtered)
router.get("/user/dogs", getUserDogs); // All dogs pertaining to current user
router.get("/:id", getDog);
router.post("/", createDog);
router.post("/delete/:dogId", restrict, deleteDog);
router.post("/message", messageDog);
router.put("/:id/update", restrict, updateDog);
router.put("/:id/like", restrict, likeDog);

export default router;
