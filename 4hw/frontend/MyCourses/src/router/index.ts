import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CourseListView from "@/views/CourseListView.vue";
import UsersView from "@/views/UsersView.vue";
import InformationView from "@/views/InformationView.vue";
import CourseView from "@/views/CourseView.vue";
import LessonView from "@/views/LessonView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/login",
      name: 'login',
      component: LoginView
    },
    {
      path: '/courses',
      name: 'courses',
      component: CourseListView
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: CourseView
    },
    {
      path: '/course/:courseId/lesson/:lessonId',
      name: 'lesson',
      component: LessonView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/information',
      name: 'information',
      component: InformationView
    }
  ]
})


export default router
