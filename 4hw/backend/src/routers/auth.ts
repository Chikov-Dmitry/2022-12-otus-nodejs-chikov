import express from "express";
import AuthController from "../controllers/auth-controller";
export const authRouter = express.Router()


authRouter.post('/registration', AuthController.registration);
authRouter.post('/login', AuthController.login)
authRouter.post('/logout', AuthController.logout)
authRouter.get('/refresh', AuthController.refresh)

