import express from "express";
import UserController from "../controllers/user-controller";

export const userRouter = express.Router()

userRouter.get('/users', UserController.getAllUsers)
userRouter.get('/user/:userId', UserController.getUserById)

