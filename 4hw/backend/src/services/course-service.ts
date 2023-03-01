import {CourseModel, ICourse} from "../db/course-model";
import ApiError from "../exceptions/api-error";
import mongoose from "mongoose";

class CourseService {
    async getAllCourses() {
        return CourseModel.find()
    }

    async getCourseById(id: string) {
        const isValidId = mongoose.Types.ObjectId.isValid(id)
        if (!isValidId) throw ApiError.BadRequest('Не валидный id')
        return CourseModel.findOne({_id: id})
    }

    async createCourse(title: ICourse["title"], description: ICourse['description'], author: ICourse["author"], createdAt: ICourse["createdAt"]) {
        const isUniqTitle = await CourseModel.findOne({title})
        if (isUniqTitle) throw ApiError.BadRequest(`Курс с названием ${title} уже существует`)
        if (!title) throw ApiError.BadRequest('Поле заголовок обязательное')
        if (!author) throw ApiError.BadRequest('Поле автор обязательное')

        return await CourseModel.create({title, description, author, createdAt})
    }
    async addUser(courseId: string, userId: string){
        return CourseModel.findOneAndUpdate({_id: courseId},
            {
                $push: {allowedUsers: userId}
            })
    }
}

export default new CourseService()