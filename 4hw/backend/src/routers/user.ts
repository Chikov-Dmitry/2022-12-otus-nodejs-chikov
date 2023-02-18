import express from "express";
import UserController from "../controllers/user-controller";
import authMiddleware from "../middlewares/auth-middleware";


export const userRouter = express.Router()

userRouter.get('/users', authMiddleware, UserController.getAllUsers)

