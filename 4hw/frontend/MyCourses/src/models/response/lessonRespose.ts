export interface LessonResponse{
    _id: string,
    title: string,
    description?: string,
    course: string,
    video: string,
    resources:{
        title: string,
        link: string
    },
    createdAt: Date,
}