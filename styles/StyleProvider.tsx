import { useState, useEffect, ReactNode } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'

type Props = {
    children: ReactNode
}

const StyleProvider = ({children}: Props) => {
    const [isMounted, setIsMounted] = useState(false);
    const darkMode = useDarkMode(true);
    const theme = darkMode.value ? darkTheme : lightTheme;

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const app = 
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>

    // prevents ssr flash for mismatched dark mode
    if(!isMounted) {
        return <div className="ssr__match__container" style={{ visibility: 'hidden' }}>{ app }</div>
    }

    return app
}

export default StyleProvider
