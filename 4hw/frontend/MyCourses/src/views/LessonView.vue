<template>
  <app-bar/>
  <v-main>
    <div class="text-center text-h5" v-if="!authStore.isAuth || !hasAccess()">
      {{ errorMessage }}
    </div>
    <div v-if="isLoaded">
      <div class="text-h3 text-center">{{ lesson.title }}</div>
      <div><span class="font-weight-bold">Описание: </span>{{ lesson.description }}</div>
      <div><span class="font-weight-bold">Видео: </span><a :href="lesson.video">{{ lesson.video }}</a></div>
      <div><span class="font-weight-bold">Материалы: </span>
        <div class="ml-4" v-for="(item, index) in lesson.resources">
          <span class="font-weight-bold">{{ item.title }}</span> <a :href="item.link">{{ item.link }}</a>
        </div>
      </div>
      <div><span class="font-weight-bold">Дата создания:</span> {{ new Date(lesson.createdAt) }}</div>

      <div>комментарии</div>
      <div v-if="!comments.length">Комментариев нет</div>
      <div v-for="(comment, index) in comments">
        <div>{{ ++index }} {{ comment.text }}</div>
      </div>
      <div>
        <v-textarea v-model="commentText" label="Комментарий" variant="outlined" class="pa-4"></v-textarea>
        <v-btn @click="addComment" class="ml-4" color="primary">Добавить</v-btn>
      </div>
    </div>
  </v-main>
</template>

<script setup lang="ts">
import AppBar from "@/views/layouts/AppBar.vue";
import {onBeforeMount, ref} from "vue";
import type {LessonResponse} from "@/models/response/lessonRespose";
import {useRoute} from "vue-router";
import LessonApi from "@/api/LessonApi";
import CourseApi from "@/api/CourseApi";
import CommentApi from "@/api/CommentApi";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore()

const route = useRoute()

const lesson = ref<LessonResponse>()
const comments = ref()
const isLoaded = ref(false)
const commentText = ref('')
const errorMessage = ref('')

async function addComment() {
  const authorId = authStore.user?.id
  if (!authorId) return
  const res = await CommentApi.addComment({author: authorId, text: commentText.value}, route.params.lessonId.toString())
  if (res.status === 200) {
    commentText.value = ''
  }
}

function hasAccess(): boolean {
  let result = false
   CourseApi.getCourseById(route.params.courseId.toString()).then((resCourse)=>{
     const allowedUsersArr = resCourse.data.allowedUsers
     if(!authStore.user) return
     if(authStore.user.id === resCourse.data.author) return true;
     const hasAccess = allowedUsersArr.includes(authStore.user.id)
     if (!hasAccess) {
       errorMessage.value = "нет доступа"
       result = false
     }
     else result = true
  })
  return  result
}

function isAuth() {
  if (!authStore.isAuth) {
    errorMessage.value = "Не авторизован"
    return false
  }else return true
}

onBeforeMount(async () => {


  if(isAuth() && hasAccess()) {
    const resLesson = await LessonApi.getLessonById(route.params.courseId.toString(), route.params.lessonId.toString())
    const commentsRes = await CommentApi.getComment(route.params.lessonId.toString())
    comments.value = commentsRes.data
    lesson.value = resLesson.data
    console.log(resLesson)
    isLoaded.value = true
  }

})
</script>

<style scoped>

</style>