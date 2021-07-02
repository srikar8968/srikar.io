import defaultStyles from './defaultStyles'

const defaultTheme = {
    ...defaultStyles,
}
  
const light = {
    mode: 'light',
    border: {
        default: defaultTheme.colors.gray[600],
        primary: defaultTheme.colors.yellow[600],
        secondary: defaultTheme.colors.gray[300],
        light: defaultTheme.colors.gray[100]
    },
    bg: {
        default: defaultTheme.colors.white,
        primary: defaultTheme.colors.yellow[600],
        secondary: defaultTheme.colors.gray[300],
        light: defaultTheme.colors.gray[50],
        invert: defaultTheme.colors.gray[900]
    },
    text: {
        default: defaultTheme.colors.gray[900],
        primary: defaultTheme.colors.yellow[600],
        secondary: defaultTheme.colors.gray[800],
        light: defaultTheme.colors.gray[400],
        invert: defaultTheme.colors.white
    }
  }
    
  const dark = {
    mode: 'dark',
    border: {
        default: defaultTheme.colors.gray[800],
        primary: defaultTheme.colors.yellow[600],
        secondary: defaultTheme.colors.gray[600],
        light: defaultTheme.colors.gray[700]
    },
    bg: {
        default: defaultTheme.colors.gray[900],
        primary: defaultTheme.colors.yellow[600],
        secondary: defaultTheme.colors.gray[600],
        light: defaultTheme.colors.gray[800],
        invert: defaultTheme.colors.gray[100]
    },
    text: {
        default: defaultTheme.colors.gray[100],
        primary: defaultTheme.colors.yellow[600],
        secondary: defaultTheme.colors.gray[300],
        light: defaultTheme.colors.gray[500],
        invert: defaultTheme.colors.gray[900]
    }
  }
    
  export const lightTheme = { ...defaultTheme, ...light }
  export const darkTheme = { ...defaultTheme, ...dark }