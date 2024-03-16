import express from "express";
import { createUser, getUsers, deleteUser } from "../controllers/users.js";
const router = express.Router();

router.post("/", createUser);

router.get("/", getUsers);

router.delete("/:userid", deleteUser);

export default router;