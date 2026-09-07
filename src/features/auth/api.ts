import { apiClient } from '../../api/client'
import type { RegisterRequest, LoginRequest, AuthResponse } from './types'

export async function registerUser(data: RegisterRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/register', data)
    return response.data
}

export async function loginUser(data: LoginRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/login', data)
    return response.data
}