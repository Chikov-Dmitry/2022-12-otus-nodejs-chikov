<template>
  <v-form @submit.prevent>
    <v-text-field
      v-model="name"
      label="Имя"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="Email"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      v-model="password"
      label="Пароль"
      variant="outlined"
      type="password"
    ></v-text-field>
    <v-btn type="submit" @click="onSubmit" block class="mt-2">
      Зарегестрироваться
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";

const AuthStore = useAuthStore()


const name = ref('')
const email = ref('')
const password = ref('')

function onSubmit(){
  AuthStore.registration(name.value, email.value, password.value)
}

</script>

<style scoped>

</style>