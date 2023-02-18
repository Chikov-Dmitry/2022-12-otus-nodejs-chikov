import {UserModel} from "../db/user-model";
import UserDto from "../dtos/user-dto";

class UserService{
    async getAllUsers(){
        const users = await UserModel.find()
        return users.map(user=>new UserDto(user))
    }
}

export default new UserService()