import {NextFunction, Request, Response} from "express";
import UserService from "../services/user-service";

class UserController {
    async getAllUsers(req: Request, res: Response, next: NextFunction){
        try{
            const users = await UserService.getAllUsers()
            return res.json(users)
        }catch (e){
            next(e)
        }
    }
}

export default new UserController()