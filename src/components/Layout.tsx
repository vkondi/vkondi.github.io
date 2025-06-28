import type { ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { 
  Brightness4, 
  Brightness7, 
  PictureAsPdf,
  Description,
  Article
} from "@mui/icons-material";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Layout = ({ children, toggleTheme, isDarkMode }: LayoutProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = (type: 'resume' | 'coverLetter') => {
    const pdfUrl = type === 'resume' ? "/resume.pdf" : "/cover_letter.pdf";
    const fileName = type === 'resume' 
      ? "Vishwajeet_Kondi_Resume.pdf" 
      : "Vishwajeet_Kondi_Cover_Letter.pdf";
    
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    handleClose();
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
            <Tooltip title="Download PDF" placement="bottom">
              <IconButton
                color="inherit"
                size="small"
                aria-label="Download PDF"
                aria-controls={open ? 'pdf-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <PictureAsPdf />
              </IconButton>
            </Tooltip>
            <Menu
              id="pdf-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'pdf-button',
              }}
              PaperProps={{
                sx: {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid",
                  borderColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)",
                  borderRadius: 2,
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 8px 32px rgba(0, 0, 0, 0.3)"
                      : "0 8px 32px rgba(0, 0, 0, 0.1)",
                  minWidth: { xs: 180, sm: 150 },
                  mt: { xs: 1, sm: 0.5 },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem 
                onClick={() => handleDownload('resume')}
                sx={{
                  minWidth: { xs: 180, sm: 150 },
                  py: { xs: 1.5, sm: 1 },
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon>
                  <Description fontSize="small" />
                </ListItemIcon>
                <ListItemText>Resume</ListItemText>
              </MenuItem>
              <MenuItem 
                onClick={() => handleDownload('coverLetter')}
                sx={{
                  minWidth: { xs: 180, sm: 150 },
                  py: { xs: 1.5, sm: 1 },
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemIcon>
                  <Article fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cover Letter</ListItemText>
              </MenuItem>
            </Menu>
            <Tooltip title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"} placement="bottom">
              <IconButton color="inherit" onClick={toggleTheme} size="small">
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>
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
