import { useState } from 'react'
import { useHabits } from '../features/habits/hooks/useHabits'
import { HabitCard } from '../features/habits/components/HabitCard'
import { CreateHabitForm } from '../features/habits/components/CreateHabitForm'
import { Button } from '../components/Button'
import { useAuth } from '../auth/AuthContext'

export function DashboardPage() {
    const [showForm, setShowForm] = useState(false)
    const { data: habits, isLoading, error } = useHabits()
    const { user, logout } = useAuth()

    return (
        <div className="min-h-screen bg-bg p-8">
            <div className="flex justify-between items-center border-2 border-ink p-3 mb-4">
                <p>HABITTRACKER - {user?.displayName.toUpperCase()}</p>
                <Button onClick={logout}>LOGOUT</Button>
            </div>

            <div className="flex justify-between items-center mb-4">
                <p>{'>'} HABITS</p>
                <Button onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'CANCEL' : '+ NEW HABIT'}
                </Button>
            </div>

            {showForm && (
                <div className="mb-4">
                    <CreateHabitForm onSuccess={() => setShowForm(false)} />
                </div>
            )}

            {isLoading && <p>LOADING...</p>}
            {error && <p className="text-danger">FAILED TO LOAD HABITS</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {habits?.map((habit) => (
                    <HabitCard key={habit.id} habit={habit} />
                ))}
            </div>

            {habits?.length === 0 && <p>NO HABITS YET. ADD ONE ABOVE.</p>}
        </div>
    )
}