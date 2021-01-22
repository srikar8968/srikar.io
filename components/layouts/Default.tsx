import styled from 'styled-components'
import Nav from '../app/Nav'
import PageTransition from '../base/animation/PageTransition'

const Content = styled.div`
    margin-top: ${({theme}) => theme.spacing[20]};
`

const DefaultLayout = ({route, children }) => {
    return (
        <div className="df-layout">
            <Nav fixed={true} />
            <Content className="app-content">
                <PageTransition show={route}>
                    { children }
                </PageTransition>
            </Content>
        </div>
    )
}

export default DefaultLayout