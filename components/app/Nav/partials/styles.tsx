import styled from 'styled-components'

export const NavBar = styled.header`
position: ${({fixed}) => fixed ? 'fixed' : 'relative'};
top: 0;
width: 100%;
height: ${({theme}) => theme.spacing[36]};
background-image: ${({fixed, theme}) => fixed ? `linear-gradient(to bottom, ${theme.bg.default} 10px, transparent 80px)` : `none`};
z-index: 40;
& .container {
    height: ${({theme}) => theme.spacing[36]};
}
& .signature-container {
    display: block;
    height: 24px;
    width: 60px;
    flex-shrink: 0;
}
`
export const LogoWrapper = styled.div`
position: absolute;
left: 0;
line-height: 0;
opacity: 0;
transform: rotateX(90deg);
`