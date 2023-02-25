import {Schema, model, Document} from "mongoose";
import {LessonModel} from "./lesson-model";

export const CourseSchema = new Schema({
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
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: "Lesson"
    }]
})

CourseSchema.pre('remove', async (next)=>{
    //TODO
    next()
})

export const CourseModel = model('Course', CourseSchema)

