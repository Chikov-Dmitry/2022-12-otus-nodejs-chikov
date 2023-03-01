<script setup lang="ts">
import {RouterView } from 'vue-router'
import {onBeforeMount} from "vue";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore()

onBeforeMount(()=>{
  if(localStorage.getItem('token')) authStore.checkAuth()
})
</script>

<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<style scoped>

</style>
