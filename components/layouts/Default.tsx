import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const DefaultLayout = ({children}: Props) => {
    return (
        <div className="df-layout">
            <div className="app-content">
                { children }
            </div>
        </div>
    )
}

export default DefaultLayout