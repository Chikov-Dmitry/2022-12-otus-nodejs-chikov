import {UserModel} from "../db/user-model";
import UserDto from "../dtos/user-dto";
import mongoose from "mongoose";
import ApiError from "../exceptions/api-error";

class UserService{
    async getAllUsers(){
        const users = await UserModel.find()
        return users.map(user=>new UserDto(user))
    }
    async getUserById(id:string){
        const user = await UserModel.findOne({_id: id})
        if(!user) throw ApiError.BadRequest("Пользователь не найден")
        return new UserDto(user)
    }
}

export default new UserService()