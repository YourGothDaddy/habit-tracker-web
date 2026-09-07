import { useState, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { registerUser } from '../features/auth/api'
import { useAuth } from '../auth/AuthContext'
import { Panel } from '../components/Panel'
import { Button } from '../components/Button'
import axios from 'axios'

export function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()
    const { login } = useAuth()

    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            login(data.token, { userId: data.userId, displayName: data.displayName })
            navigate('/')
        },
        onError: (err) => {
            if (axios.isAxiosError(err) && err.response?.status === 400) {
                const errors = err.response.data as string[]
                setError(errors.join(', ').toUpperCase())
            } else {
                setError('REGISTRATION FAILED - TRY AGAIN')
            }
        },
    })

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setError(null)
        mutation.mutate({ email, password, displayName })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg p-4">
            <Panel className="w-full max-w-sm">
                <p className="mb-4">REGISTER</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <label className="flex flex-col gap-1">
                        <span>DISPLAY NAME</span>
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            required
                            className="border-2 border-ink bg-bg px-2 py-1 font-mono"
                        />
                    </label>

                    <label className="flex flex-col gap-1">
                        <span>EMAIL</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-2 border-ink bg-bg px-2 py-1 font-mono"
                        />
                    </label>

                    <label className="flex flex-col gap-1">
                        <span>PASSWORD</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border-2 border-ink bg-bg px-2 py-1 font-mono"
                        />
                    </label>

                    {error && <p className="text-danger">{error}</p>}

                    <Button type="submit" disabled={mutation.isPending}>
                        {mutation.isPending ? 'REGISTERING...' : 'REGISTER'}
                    </Button>
                </form>

                <p className="mt-4">
                    HAVE AN ACCOUNT? <Link to="/login" className="underline">LOGIN</Link>
                </p>
            </Panel>
        </div>
    )
}