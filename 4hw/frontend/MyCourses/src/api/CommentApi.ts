import type {AxiosResponse} from "axios";
import type {CommentResponse} from "@/models/response/commentResponse";
import ApiInstance from "@/api/index";

export default class CommentApi{
    static getComment(lessonId: string):Promise<AxiosResponse<CommentResponse>>{
        return ApiInstance.get(`/comment/${lessonId}`)
    }
    static addComment(body:{author: string, text: string},lessonId: string):Promise<AxiosResponse<CommentResponse>>{
        return ApiInstance.post(`comment/${lessonId}`, body)
    }
}