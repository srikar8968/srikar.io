import styled from 'styled-components'
import Nav from '../app/Nav'

const Content = styled.div`
    margin-top: ${({theme}) => theme.spacing[20]};
`

const DefaultLayout = ({route, children }) => {
    return (
        <div className="df-layout">
            <Nav mode="fixed" />
            <Content className="app-content">
                { children }
            </Content>
        </div>
    )
}

export default DefaultLayout