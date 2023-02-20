<template>
  <v-main>
    <div class="form-wrapper">
      <div class="form-content">
        <v-sheet elevation="3" style="padding: 30px" rounded>
          <v-btn-toggle
            v-model="model"
            mandatory
            rounded="0"
            color="primary"
            group
            class="mb-8"
          >
            <v-btn >
              Войти
            </v-btn>
            <v-btn>
              Зарегестрироваться
            </v-btn>
          </v-btn-toggle>
          <login-form v-if="model === 0"/>
        <registration-form v-if="model === 1"/>
        </v-sheet>
      </div>
    </div>
  </v-main>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import RegistrationForm from "@/components/auth/RegistrationForm.vue";
import LoginForm from "@/components/auth/LoginForm.vue";


const model = ref(0)

</script>

<style scoped>
.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.form-content {
  width: 360px;
}
</style>