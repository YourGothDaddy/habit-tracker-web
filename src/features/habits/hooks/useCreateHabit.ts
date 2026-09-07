import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createHabit } from '../api'

export function useCreateHabit() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createHabit,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['habits'] })
        },
    })
}