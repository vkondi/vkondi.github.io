import { useState, Suspense } from "react";
import {
  ThemeProvider,
  CssBaseline,
  CircularProgress,
  Box,
} from "@mui/material";
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
            <Suspense
              fallback={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "50vh",
                  }}
                >
                  <CircularProgress />
                </Box>
              }
            >
              <Router />
            </Suspense>
          </Layout>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
