import type { ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { Brightness4, Brightness7, PictureAsPdf } from "@mui/icons-material";

interface LayoutProps {
  children: ReactNode;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Layout = ({ children, toggleTheme, isDarkMode }: LayoutProps) => {
  const handleDownload = () => {
    // In a real application, this would be a link to an actual PDF file
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Vishwajeet_Kondi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar
          sx={{ justifyContent: "space-around", px: { xs: 2, sm: 4, md: 6 } }}
        >
          <Typography variant="h6" component="div">
            Resume
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              color="inherit"
              size="small"
              aria-label="Download Resume PDF"
              onClick={handleDownload}
            >
              <PictureAsPdf />
            </IconButton>
            <IconButton color="inherit" onClick={toggleTheme} size="small">
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 64px)", // Subtract AppBar height
          py: 4,
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {children}
        </Container>
      </Container>
    </Box>
  );
};

export default Layout;
