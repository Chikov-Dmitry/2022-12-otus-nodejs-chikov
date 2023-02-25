import {Schema, model} from "mongoose";

const Comment = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Resource = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
});
export const LessonSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        maxLength: 50
    },
    description: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        maxLength: 1000
    },
    video: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        require: true
    },
    resources:[Resource]

})

export const LessonModel = model("Lesson", LessonSchema)