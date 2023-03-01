import {NextFunction, Request, Response} from "express";
import LessonService from "../services/lesson-service";
import mongoose, {Schema} from "mongoose";

class LessonController {
    async getAllLessons(req: Request, res: Response, next: NextFunction) {
        try {
            const courseId = new mongoose.Types.ObjectId(req.params.courseId)
            const lessons = await LessonService.getAllLessons(courseId)
            return res.json(lessons)
        } catch (e) {
            next(e)
        }
    }

    async getLessonById(req: Request, res: Response, next: NextFunction) {
        try {
            const courseId = new mongoose.Types.ObjectId(req.params.courseId)
            const lessonId = new mongoose.Types.ObjectId(req.params.lessonId)
            const lesson = await LessonService.getLessonById(courseId, lessonId)
            return res.json(lesson)
        } catch (e) {
            next(e)
        }
    }

    async createLesson(req: Request, res: Response, next: NextFunction) {
        try {
            const {title, description, video, createdAt, resources} = req.body
            const course = new mongoose.Types.ObjectId(req.params.courseId)
            const lessonData = await LessonService.createLesson(title, description, video, createdAt, course, resources)
            res.send(lessonData)
        } catch (e) {
            next(e)
        }
    }
}

export default new LessonController()