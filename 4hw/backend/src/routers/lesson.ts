import express from "express";
import LessonController from "../controllers/lesson-controller";

export const lessonRouter = express.Router()

lessonRouter.get('/course/:courseId/lessons', LessonController.getAllLessons)
lessonRouter.get('/course/:courseId/lesson/:lessonId', LessonController.getLessonById)
lessonRouter.post('/course/:courseId/lesson', LessonController.createLesson)

