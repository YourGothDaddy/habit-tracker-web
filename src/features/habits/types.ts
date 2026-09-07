export type HabitFrequency = 'Daily' | 'Weekly'

export interface Habit {
  id: string
  name: string
  description: string | null
  frequency: HabitFrequency
  color: string
  isArchived: boolean
  createdAtUtc: string
}

export interface CreateHabitRequest {
  name: string
  description: string | null
  frequency: HabitFrequency
  color: string
}