import { Box, Typography } from "@mui/material";
import { usePortfolioData } from "../../context/DataContext";

const AboutSection = ({ isMobile }: { isMobile: boolean }) => {
  const data = usePortfolioData();

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        About Me
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          textAlign: "justify",
          lineHeight: isMobile ? 1.5 : 1.8,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.02)",
          p: 3,
          borderRadius: 2,
        }}
      >
        {data.aboutMe}
      </Typography>
    </Box>
  );
};

export default AboutSection;
