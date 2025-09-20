import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";
import Router from "./router";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AuthProvider>
      <DataProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}>
            <Router />
          </Layout>
          <Footer />
        </ThemeProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
