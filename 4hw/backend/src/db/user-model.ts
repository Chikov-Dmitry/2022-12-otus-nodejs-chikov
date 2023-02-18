import {Schema, model, Document} from 'mongoose'

export interface IUser extends Document{
    name: string,
    email: string,
    password: string,

}

const UserSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
})

export const UserModel = model<IUser>("User", UserSchema)