import { ReactNode } from 'react'
import styled from 'styled-components'

const Content = styled.div`
    // margin-top: ${({theme}) => theme.spacing[20]};
`

type Props = {
    children: ReactNode
}

const DefaultLayout = ({children}: Props) => {
    return (
        <div className="df-layout">
            <Content className="app-content">
                { children }
            </Content>
        </div>
    )
}

export default DefaultLayout