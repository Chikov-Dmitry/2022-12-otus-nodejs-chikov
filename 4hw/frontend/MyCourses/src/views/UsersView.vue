<template>
  <app-bar/>
  <v-main>
    <div class="text-center text-h5" v-if="!authStore.isAuth">
      Для просмотра списка пользователей необходимо авторизоваться
    </div>
    <div v-else>
      <div class="text-h3 text-center">Пользователи</div>
      <div class="user text-subtitle-1" v-for="(user, index) in users">
        <span>{{ index + 1 }}</span>
        <span>Имя: {{ user.name }}</span>
        <span>Email: {{ user.email }}</span>
      </div>
    </div>

  </v-main>
</template>

<script setup lang="ts">
import AppBar from "@/views/layouts/AppBar.vue";
import {onMounted, ref} from "vue";
import UserApi from "@/api/UserApi";
import type {IUser} from "@/models/IUser";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore()

const users = ref<IUser[]>([])


onMounted(async () => {
  const response = await UserApi.fetchUsers()
  users.value = response.data
})
</script>

<style scoped>
.user > span {
  margin-left: 30px;
}
</style>