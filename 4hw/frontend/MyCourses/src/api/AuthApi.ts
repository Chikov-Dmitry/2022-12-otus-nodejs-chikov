import ApiInstance from "@/api/index";
import type {AxiosResponse} from "axios";
import type {AuthResponse} from "@/models/response/authResponse";

export default class AuthApi {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return ApiInstance.post('/auth/login', {email, password})
    }

    static async registration(name: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return ApiInstance.post('auth/registration', {name, email, password})
    }

    static async logout(): Promise<void> {
        return ApiInstance.post('/auth/logout')
    }
}