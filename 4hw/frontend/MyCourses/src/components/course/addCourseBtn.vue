<template>
  <v-dialog
    v-if="authStore.isAuth"
    v-model="dialog"
    width="800"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        color="primary"
        v-bind="props"
      >
        + Создать курс
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Даннные</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
              <v-col cols="12">
              <v-text-field
                label="Заголовок*"
                v-model="title"
                required
              ></v-text-field>
              </v-col>

              <v-col cols="12">
              <v-textarea
                label="Описание"
                v-model="description"
              ></v-textarea>
              </v-col>

          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="addCourse"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
import CourseApi from "@/api/CourseApi";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";

const router = useRouter()

const authStore = useAuthStore()

const dialog = ref(false)
const title = ref('')
const description = ref('')

async function addCourse() {
  const author = authStore.user?.id
  if(!author) return
  const res = await CourseApi.addCourse({title: title.value, description: description.value, author: author})
  if(res.status === 200){
    await router.push({name: 'course', params: {courseId: res.data._id}})
  }
}
</script>

<style scoped>

</style>