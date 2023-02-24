import {defineStore} from "pinia";
import {ref} from "vue";
import type {IUser} from "@/models/IUser";
import AuthApi from "@/api/AuthApi";
import axios, {AxiosError} from "axios";
import {API_URL} from "@/api";
import type {AuthResponse} from "@/models/response/authResponse";

export const useAuthStore = defineStore('auth', ()=>{
    const isAuth = ref(false)
    const user = ref<IUser | null>(null)

    async function login (email: string, password: string){
        try {
            const response = await AuthApi.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            isAuth.value = true;
            user.value = response.data.user
            return response
        }
        catch (e) {
            if(e instanceof AxiosError){
                return e.response
            }
        }
    }
    async function registration (name: string, email: string, password: string){
        try {
            const response = await AuthApi.registration(name, email, password)
            localStorage.setItem('token', response.data.accessToken)
            isAuth.value = true;
            user.value = response.data.user
        }
        catch (e) {
            if(e instanceof AxiosError){
                return e.response?.data.message
            }
        }
    }

    async function logout (){
        try {
            await AuthApi.logout()
            localStorage.removeItem('token')
            isAuth.value = false;
            user.value = null
        }
        catch (e) {
            if(e instanceof AxiosError){
                return e.response?.data.message
            }
        }
    }
    
    async function checkAuth(){
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            isAuth.value = true
            user.value = response.data.user
        }catch (e) {
            if(e instanceof AxiosError){
                return e.response?.data.message
            }
        }
    }
    return {isAuth, user, login, registration, logout, checkAuth}
})