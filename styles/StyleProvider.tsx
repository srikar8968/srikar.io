import { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'

const StyleProvider = ({children}) => {
    const [isMounted, setIsMounted] = useState(false);
    const darkMode = useDarkMode(false);
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
