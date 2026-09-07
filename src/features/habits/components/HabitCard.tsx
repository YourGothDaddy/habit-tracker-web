import type { Habit } from '../types'
import { Panel } from '../../../components/Panel'

interface HabitCardProps {
    habit: Habit
}

export function HabitCard({ habit }: HabitCardProps) {
    return (
        <Panel>
            <p className="font-bold">{habit.name?.toUpperCase() || 'UNNAMED HABIT'}</p>

            {habit.description && (
                <p className="text-charcoal text-sm">{habit.description}</p>
            )}

            <p className="text-sm mt-2">
                FREQUENCY: {habit.frequency ? String(habit.frequency).toUpperCase() : 'NOT SPECIFIED'}
            </p>

            <div className="mt-3 h-8 bg-shadow border-2 border-ink flex items-center justify-center text-xs">
                [ HEATMAP PLACEHOLDER ]
            </div>
        </Panel>
    )
}
