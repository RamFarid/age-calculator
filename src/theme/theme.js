import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  theme: 'light',
  palette: {
    offWhite: 'hsl(0, 0%, 94%)',
    lightGrey: 'hsl(0, 0%, 86%)',
    smokeyGrey: 'hsl(0, 1%, 44%)',
    offBlack: 'hsl(0, 0%, 8%)',
    primary: {
      main: 'hsl(259, 100%, 65%)',
    },
    error: {
      main: 'hsl(0, 100%, 67%)',
    },
  },
})

export default theme
