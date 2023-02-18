import {IUser} from "../db/user-model";

export default class UserDto{
    name;
    email;
    id;

    constructor(model:IUser) {
        this.name = model.name
        this.email = model.email;
        this.id = model._id;
    }
}