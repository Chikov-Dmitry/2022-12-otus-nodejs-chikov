import ApiInstance from "@/api/index";
import type {AxiosResponse} from "axios";
import type {CourseListResponse} from "@/models/response/courseListResponse";
import type {CourseResponse} from "@/models/response/courseResponse";

export default class CourseApi{
    static getAllCourses():Promise<AxiosResponse<CourseListResponse>>{
        return ApiInstance.get('/courses')
    }
    static getCourseById(id: string):Promise<AxiosResponse<CourseResponse>>{
        return ApiInstance.get(`/course/${id}`)
    }
    static addCourse(body: {title: string, description: string, author: string}):Promise<AxiosResponse<CourseResponse>>{
        return ApiInstance.post(`/course`, body)
    }
}