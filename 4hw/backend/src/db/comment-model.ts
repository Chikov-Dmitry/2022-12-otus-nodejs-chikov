import {model, Schema} from "mongoose";
import {LessonSchema} from "./lesson-model";

const CommentSchema = new Schema({
    lesson:{
        type: Schema.Types.ObjectId,
        ref: "Lesson",
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const CommentModel = model("Comment", CommentSchema)