import type {AxiosResponse} from "axios";
import type {LessonResponse} from "@/models/response/lessonRespose";
import ApiInstance from "@/api/index";


export default class LessonApi{
    static getAllLesson(courseId: string):Promise<AxiosResponse<LessonResponse[]>>{
        return ApiInstance.get(`/course/${courseId}/lessons`)
    }
    static getLessonById(courseId: string, lessonId: string):Promise<AxiosResponse<LessonResponse>>{
        return ApiInstance.get(`/course/${courseId}/lesson/${lessonId}`)
    }
    static addLesson(body: {title: string, description: string, video: string, resources: {title: string, link: string}[], author: string}, courseId: string){
        return ApiInstance.post(`/course/${courseId}/lesson`, body)
    }
}