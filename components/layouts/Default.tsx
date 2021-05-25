import styled from 'styled-components'

const Content = styled.div`
    // margin-top: ${({theme}) => theme.spacing[20]};
`

const DefaultLayout = ({route, children }) => {
    return (
        <div className="df-layout">
            <Content className="app-content">
                { children }
            </Content>
        </div>
    )
}

export default DefaultLayout