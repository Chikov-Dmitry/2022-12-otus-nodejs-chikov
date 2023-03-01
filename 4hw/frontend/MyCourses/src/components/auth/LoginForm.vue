<template>
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
  <p v-if="error" class="text-error">{{ errorMessage }}</p>
  <v-btn type="submit" @click="onSubmit" block class="mt-2">
    Войти
  </v-btn>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";

const router = useRouter()

const AuthStore = useAuthStore()

const email = ref('')
const password = ref('')

const error = ref(false)
const errorMessage = ref('')

async function onSubmit() {
  let response = await AuthStore.login(email.value, password.value)
  if(response && response.status !==200){

    error.value = true
    errorMessage.value = response.data.message
  }else{
   await router.push('/')
  }
}
</script>

<style scoped>

</style>