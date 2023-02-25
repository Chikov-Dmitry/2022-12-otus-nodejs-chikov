import {NextFunction, Request, Response} from "express";
import CourseService from "../services/course-service";

class CourseController {
    async getAllCourses(req: Request, res: Response, next: NextFunction) {
        try {
            const courses = await CourseService.getAllCourses()
            return res.json(courses)
        } catch (e) {
            next(e)
        }
    }

    async getCourseById(req: Request, res: Response, next: NextFunction) {
        try {
            const course = await CourseService.getCourseById(req.params.id)
            return res.json(course)
        } catch (e) {
            next(e)
        }
    }

    async createCourse(req: Request, res: Response, next: NextFunction) {
        try {
            const {title, description, author, createdAt, lessons} = req.body
            const courseData = await CourseService.createCourse(title, description, author, createdAt, lessons)
            res.send(courseData)
        } catch (e) {
            next(e)
        }
    }
}

export default new CourseController()