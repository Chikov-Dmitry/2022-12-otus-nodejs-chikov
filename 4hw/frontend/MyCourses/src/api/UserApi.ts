import ApiInstance from "@/api/index";
import type {AxiosResponse} from "axios";
import type {IUser} from "@/models/IUser";


export default class UserApi{
    static fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return ApiInstance.get<IUser[]>('/users')
    }
    static getUserById(id: string):Promise<AxiosResponse<IUser>>{
        return ApiInstance.get<IUser>(`/user/${id}`)
    }
}