import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'danger'
}

export function Button({ variant = 'default', className = '', children, ...rest }: ButtonProps) {
    const base = 'border-2 border-ink px-4 py-2 font-mono uppercase active:bg-ink active:text-bg'
    const variantClass = variant === 'danger' ? 'text-danger border-danger active:bg-danger active:text-bg' : ''

    return (
        <button className={`${base} ${variantClass} ${className}`} {...rest}>
            {children}
        </button>
    )
}