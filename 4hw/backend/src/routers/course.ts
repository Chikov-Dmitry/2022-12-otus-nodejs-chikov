import express from "express";
import CourseController from "../controllers/course-controller";

export const courseRouter = express.Router()

courseRouter.get('/courses', CourseController.getAllCourses)
courseRouter.get('/course/:id', CourseController.getCourseById)
courseRouter.post('/course', CourseController.createCourse)
courseRouter.post('/course/:id/add-user/:userId', CourseController.addUser)