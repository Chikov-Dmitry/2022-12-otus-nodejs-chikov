<template>
  <app-bar/>
  <v-main>

    <div v-if="isLoaded">
      <div class="text-h3 text-center">{{ course.title }}</div>
      <div><span class="font-weight-bold">Описание:</span> {{ course.description }}</div>
      <div><span class="font-weight-bold">Автор:</span> {{ author.name }} {{ author.email }}</div>
      <div><span class="font-weight-bold">Дата создания:</span> {{ new Date(course.createdAt) }}</div>
      <div>Список занятий:
        <div class="ml-4" v-if="!lessonsList.length">Пусто</div>
        <div @click="lessonClick(item)" class="lesson ml-4" v-for="(item, index) in lessonsList" :key="index">
          <span class="font-weight-bold">{{ item.title }}</span>
        </div>
        <div v-if="isAuthor">
          <add-lesson-btn/>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script setup lang="ts">
import AppBar from "@/views/layouts/AppBar.vue";
import {useRoute} from "vue-router";
import {onBeforeMount, ref} from "vue";
import CourseApi from "@/api/CourseApi";
import type {CourseResponse} from "@/models/response/courseResponse";
import type {IUser} from "@/models/IUser";
import UserApi from "@/api/UserApi";
import type {LessonResponse} from "@/models/response/lessonRespose";
import LessonApi from "@/api/LessonApi";
import {useRouter} from "vue-router";
import {useAuthStore} from "@/stores/auth";
import AddLessonBtn from "@/components/lesson/addLessonBtn.vue";

const authStore = useAuthStore()

const route = useRoute()
const router = useRouter()

const course = ref<CourseResponse | null>(null)
const author = ref<IUser>()
const lessonsList = ref<LessonResponse[]>()
const isLoaded = ref(false)
const isAuthor = ref(false)


function lessonClick(item: LessonResponse) {
  router.push({name: 'lesson', params: {courseId: route.params.courseId, lessonId: item._id}})
}

onBeforeMount(async () => {
  const response = await CourseApi.getCourseById(route.params.courseId.toString())
  course.value = response.data
  const resAuthor = await UserApi.getUserById(response.data.author)
  isAuthor.value = resAuthor.data.id === authStore.user?.id

  author.value = resAuthor.data
  const resLessonsList = await LessonApi.getAllLesson(route.params.courseId.toString())

  lessonsList.value = resLessonsList.data

  isLoaded.value = true
})
</script>

<style scoped>
.lesson {
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
}

.lesson:hover {
  background-color: #ccc;
}
</style>