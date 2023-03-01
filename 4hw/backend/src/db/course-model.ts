import mongoose, {Schema, model, Document} from "mongoose";
import {LessonModel} from "./lesson-model";

export interface ICourse extends Document{
    title: string,
    description: string,
    author: Schema.Types.ObjectId,
    createdAt: Date,
    allowedUsers: [string]
}
export const CourseSchema = new Schema<ICourse>({
    title:{
        type: String,
        required: [true, 'Title is required'],
        unique: true,
        trim: true,
        maxLengths: 50
    },
    description: {
        type: String,
        trim: true,
        maxLength: 1000
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    allowedUsers: {
        type: [String],
        ref: "User"
    }
})

export const CourseModel = model('Course', CourseSchema)

