import { Panel } from '../components/Panel'
import { Button } from '../components/Button'

export function DashboardPage() {
    return (
        <div className="min-h-screen bg-bg p-8">
            <Panel>
                <p>HABITTRACKER v0.1 - SYSTEM CHECK</p>
                <Button className="mt-4">TEST BUTTON</Button>
            </Panel>
        </div>
    )
}