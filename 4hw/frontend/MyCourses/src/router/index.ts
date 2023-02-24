import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CoursesView from "@/views/CoursesView.vue";
import UsersView from "@/views/UsersView.vue";
import InformationView from "@/views/InformationView.vue";

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
      component: CoursesView
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
