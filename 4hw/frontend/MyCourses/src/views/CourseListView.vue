<template>
  <app-bar/>
  <v-main>
    <div class="d-flex align-center justify-end mt-4">
      <add-course-btn/>
    </div>
    <div class="text-h3 text-center">Список курсов</div>
    <div v-if="!courseList.length">Пусто</div>
    <div @click="clickCourse(item)" v-for="(item, index) in courseList" :key="index" class="course text-subtitle-1">
      <span>{{ ++index }} {{ item.title }}</span>
    </div>
  </v-main>
</template>

<script setup lang="ts">
import AppBar from "@/views/layouts/AppBar.vue";
import {onMounted, ref} from "vue";
import CourseApi from "@/api/CourseApi";
import type {CourseListResponse} from "@/models/response/courseListResponse";
import type {CourseResponse} from "@/models/response/courseResponse";
import {useRouter} from "vue-router";
import AddCourseBtn from "@/components/course/addCourseBtn.vue";

const router = useRouter()

const courseList = ref<CourseListResponse>([])

onMounted(async () => {
  const response = await CourseApi.getAllCourses()
  courseList.value = response.data
})

function clickCourse(course: CourseResponse) {
  router.push({name: 'course', params:{courseId: course._id}})
}
</script>

<style scoped>
.course > span {
  margin-left: 30px;
}

.course {
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
}

.course:hover {
  background-color: #ccc;
}
</style>