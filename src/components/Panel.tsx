import type { ReactNode } from 'react'

interface PanelProps {
    children: ReactNode
    className?: string
}

export function Panel({ children, className = '' }: PanelProps) {
    return (
        <div className={`border-2 border-ink bg-bg p-4 ${className}`}>
            {children}
        </div>
    )
}