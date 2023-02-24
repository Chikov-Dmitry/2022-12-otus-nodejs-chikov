<template>
  <v-app-bar color="primary">
    <div class="app-bar-content">
      <div class="text-h5 title" @click="goTo('/')">MyCourses</div>
      <div class="app-bar-menu-item" @click="goTo('/courses')">Курсы</div>
      <div class="app-bar-menu-item" @click="goTo('/users')">Пользователи</div>
      <div class="app-bar-menu-item" @click="goTo('/information')">Информация</div>
    </div>
    <template v-slot:append>
      <v-icon icon="mdi-account"></v-icon>
      <div v-if="authStore.isAuth" class="d-flex align-center">
        <div>{{ authStore.user.name }}</div>
        <div>
          <v-btn @click="logout">Выйти</v-btn>
        </div>
      </div>
      <div v-else>
        <v-btn variant="tonal" to="/login">Войти</v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";

const router = useRouter()

const authStore = useAuthStore()

function logout() {
  authStore.logout()
}

function goTo(routeName: string) {
  router.push(routeName)
}
</script>

<style scoped>
.app-bar-content {
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  cursor: default;
  margin-right: 40px;
  font-weight: 900;
}

.app-bar-menu-item {
  margin: 0 10px;
  cursor: pointer;
  color: rgb(var(--v-theme-surface));
  font-weight: 700;
}

.app-bar-menu-item:hover {
  color: rgb(var(--v-theme-warning))
}
</style>