import type { ReactNode } from "react";
import { Container, Box } from "@mui/material";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Layout = ({ children, toggleTheme, isDarkMode }: LayoutProps) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <header>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </header>
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 128px)", // Subtract header and footer heights
          padding: "2rem 0",
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
      </main>
    </Box>
  );
};

export default Layout;
