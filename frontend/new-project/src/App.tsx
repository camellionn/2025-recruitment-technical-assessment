// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'
import DashBoard from './components/dashboard.tsx';

function App() {
    return (
        <div>
            <DashBoard />
            <h1 style={{ textAlign: 'center', marginTop: '20px'}}>
                Hiiiiiiiii!
            </h1>
        </div>
    )
}

export default App
