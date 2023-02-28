import express from "express";
import CommentController from "../controllers/comment-controller";

export const commentRouter = express.Router()

commentRouter.get('/comment/:lessonId', CommentController.getComments)
commentRouter.post('/comment/:lessonId', CommentController.createComment)