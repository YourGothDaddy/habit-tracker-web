import { useState, type FormEvent } from 'react'
import { useCreateHabit } from '../hooks/useCreateHabit'
import { Button } from '../../../components/Button'
import type { HabitFrequency } from '../types'

interface CreateHabitFormProps {
    onSuccess: () => void
}

export function CreateHabitForm({ onSuccess }: CreateHabitFormProps) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [frequency, setFrequency] = useState<HabitFrequency>('Daily')

    const mutation = useCreateHabit()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        mutation.mutate(
            { name, description: description || null, frequency, color: '#39FF14' },
            { onSuccess }
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-2 border-ink p-4">
            <label className="flex flex-col gap-1">
                <span>NAME</span>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-2 border-ink bg-bg px-2 py-1 font-mono"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span>DESCRIPTION</span>
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border-2 border-ink bg-bg px-2 py-1 font-mono"
                />
            </label>

            <label className="flex flex-col gap-1">
                <span>FREQUENCY</span>
                <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value as HabitFrequency)}
                    className="border-2 border-ink bg-bg px-2 py-1 font-mono"
                >
                    <option value="Daily">DAILY</option>
                    <option value="Weekly">WEEKLY</option>
                </select>
            </label>

            <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? 'ADDING...' : 'ADD HABIT'}
            </Button>
        </form>
    )
}