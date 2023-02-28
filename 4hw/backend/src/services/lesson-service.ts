import {ILesson, LessonModel} from "../db/lesson-model";
import {CourseModel} from "../db/course-model";
import ApiError from "../exceptions/api-error";

class LessonService {
    async getAllLessons(courseId: ILesson["course"]) {
        return LessonModel.find({course: courseId})
    }

    async getLessonById(courseId: ILesson["course"], lessonId: ILesson['_id']) {
        return LessonModel.findOne({course: courseId, _id: lessonId})
    }

    async createLesson(title: ILesson["title"], description: ILesson["description"], video: ILesson["video"], createdAt: ILesson["createdAt"], course: ILesson["course"], resources: ILesson["resources"]) {
        const isUniqTitle = await LessonModel.findOne({title})
        if (isUniqTitle) throw ApiError.BadRequest(`Урок с названием ${title} уже существует`)
        if (!title) throw ApiError.BadRequest('Поле заголовок обязательное')

        return await LessonModel.create({title, description, video, course, resources})
    }
}

export default new LessonService()