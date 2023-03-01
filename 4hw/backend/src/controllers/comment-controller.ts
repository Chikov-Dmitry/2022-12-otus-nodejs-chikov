import {NextFunction, Request, Response} from "express";
import CommentService from "../services/comment-service";
import mongoose from "mongoose";
import commentService from "../services/comment-service";

class CommentController {
    async getComments(req: Request, res: Response, next: NextFunction){
        try {
            const lessonId = req.params.lessonId;
            const comments = await commentService.getComments(lessonId)
            return res.json(comments)
        }catch (e) {
            next(e)
        }
    }
    async createComment(req: Request, res: Response, next: NextFunction) {
        try {
            const {author, text} = req.body
            const lessonId = req.params.lessonId
            const commentData = await CommentService.createComment(lessonId, author, text)
            return res.json(commentData)
        } catch (e) {
            next(e)
        }
    }
}

export default new CommentController()