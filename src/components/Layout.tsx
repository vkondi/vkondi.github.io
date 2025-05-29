import type { ReactNode } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

interface LayoutProps {
  children: ReactNode;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Layout = ({ children, toggleTheme, isDarkMode }: LayoutProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static" elevation={0} color="transparent">
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              Resume
            </Typography>
            <IconButton color="inherit" onClick={toggleTheme} size="small">
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
