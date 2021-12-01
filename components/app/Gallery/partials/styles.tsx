import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: stretch;
padding: 2rem 0;
`
export const Item = styled.div`
display: block;
width: 33%;
position: relative;
margin: 0 .5rem;
overflow: hidden;
border-radius: 0.25rem;
& .bg-overlay {
    & img { 
        background-color: ${({theme}) => theme.bg.secondary}; 
        opacity: ${({theme}) => (theme.mode == 'dark') ? '0.2' : '0.6' }
    }
}
& .overlay{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    overflow: hidden;
    & img {
        opacity: 0.8
    }
    &.otxt{
        transform: translateY(280px);
        background-color: ${({theme}) => theme.bg.default};
        color: ${({theme}) => theme.text.default};
        opacity: 0.9;
        backdrop-filter: blur(2px;);
        padding: 0 2rem;
    }
}
`