import { apiClient } from '../../api/client'
import type { Habit, CreateHabitRequest } from './types'

export async function getHabits(): Promise<Habit[]> {
    const response = await apiClient.get<Habit[]>('/habits')
    return response.data
}

export async function createHabit(data: CreateHabitRequest): Promise<string> {
    const response = await apiClient.post<string>('/habits', data)
    return response.data
}