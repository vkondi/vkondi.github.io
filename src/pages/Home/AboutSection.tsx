import { Box, Typography } from "@mui/material";
import { usePortfolioData } from "../../context/DataContext";

const AboutSection = ({ isMobile }: { isMobile: boolean }) => {
  const data = usePortfolioData();

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        About Me
      </Typography>
      
      {/* Iterate over aboutMe array for bullet points, fix bullet alignment */}
      <Box
        sx={{
          textAlign: "justify",
          lineHeight: isMobile ? 1.5 : 1.8,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.02)",
          p: 3,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {data.aboutMe.map((point, idx) => (
          <Box key={idx} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="span"
              sx={{
                fontSize: 14,
                color: (theme) => theme.palette.text.secondary,
                lineHeight: 1.5,
                mt: 0, // Center bullet with text
                display: "flex",
                alignItems: "center",
                height: "100%",
                minWidth: 18,
                justifyContent: "center",
              }}
            >
              •
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ ml: 1.5 }}>
              {point}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutSection;
