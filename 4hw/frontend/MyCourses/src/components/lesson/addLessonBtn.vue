<template>
  <v-dialog
    v-model="dialog"
    width="800"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        color="primary"
        v-bind="props"
      >
        + Добавить занятие
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

            <v-col cols="12">
              <v-text-field
                label="Ссылка на видео"
                v-model="video"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <div v-for="(item, index) in resources">
                {{ ++index }} {{ item.title }}-{{ item.link }}
              </div>
              <v-dialog
                v-model="resourcesDialog"
                width="400"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="primary"
                    v-bind="props"
                  >
                    + Добавить ресурс
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
                            v-model="resTitle"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field
                            label="ссылка*"
                            v-model="resLink"
                            required
                          ></v-text-field>
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
                      @click="resourcesDialog = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="addResource"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
import LessonApi from "@/api/LessonApi";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()

const authStore = useAuthStore()

const dialog = ref(false)
const resourcesDialog = ref(false)
const title = ref('')
const description = ref('')
const video = ref('')
const resources = ref<{ title: string, link: string }[]>([])

const resTitle = ref("")
const resLink = ref("")

async function addCourse() {
  const author = authStore.user?.id
  if (!author) return
  const res = await LessonApi.addLesson({
    title: title.value,
    description: description.value,
    video: video.value,
    resources: resources.value,
    author: author
  }, route.params.courseId.toString())
  if (res.status === 200) {
    dialog.value = false
  }
}

function addResource() {
  resources.value.push({title: resTitle.value, link: resLink.value})
  resourcesDialog.value = false
}
</script>

<style scoped>

</style>