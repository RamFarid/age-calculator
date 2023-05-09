import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import theme from './theme/theme'

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      'input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
      },

      'input[type=number]': {
        MozAppearance: 'textfield' /* Firefox */,
      },
      body: {
        backgroundColor: theme.palette.offWhite,
      },
    })}
  />
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
