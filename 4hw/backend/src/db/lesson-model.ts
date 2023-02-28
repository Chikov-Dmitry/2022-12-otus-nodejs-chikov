import mongoose, {Schema, model, Document} from "mongoose";

export interface ILesson extends Document {
    title: string,
    description: string,
    video: string,
    createdAt: Date,
    course: mongoose.Types.ObjectId,
    resources: { title: string, link: string }[],
}



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
    resources: [Resource],

})

export const LessonModel = model("Lesson", LessonSchema)