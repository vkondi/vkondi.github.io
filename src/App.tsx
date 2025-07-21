import { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from './theme'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import { DataProvider } from './context/DataContext'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <DataProvider>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}>
          <Home />
        </Layout>
        <Footer />
      </ThemeProvider>
    </DataProvider>
  )
}

export default App
