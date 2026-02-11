import { Suspense } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  CircularProgress,
  Box,
} from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Router from "./router";

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout>
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
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
