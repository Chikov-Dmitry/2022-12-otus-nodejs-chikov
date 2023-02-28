import mongoose from "mongoose";
import {CommentModel} from "../db/comment-model";

class CommentService {
    async getComments(lessonId: string){
        return CommentModel.find({lesson: lessonId})
    }
    async createComment(lesson: string, author: mongoose.Types.ObjectId, text: string) {
        return await CommentModel.create({lesson, author, text})
    }
}

export default new CommentService()