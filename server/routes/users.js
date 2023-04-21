import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//CRUD /:id is a querey string that the front end sends to the backend
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
