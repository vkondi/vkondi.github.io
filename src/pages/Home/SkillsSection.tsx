import { Box, Typography } from "@mui/material";
import SkillRow from "../../components/SkillRow";
import { usePortfolioData } from "../../context/DataContext";

const SkillsSection = ({ isMobile }: { isMobile: boolean }) => {
  const data = usePortfolioData();

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Skills
      </Typography>
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
          gap: 1,
          flexDirection: "column",
          justifyContent: "center",
          "& > *": {
            animation: "fadeInUp 0.5s ease-out forwards",
          },
          "@keyframes fadeInUp": {
            "0%": {
              opacity: 0,
              transform: "translateX(150px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateX(0)",
            },
          },
        }}
      >
        {data.skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <SkillRow skills={skill.skills} title={skill.title} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;
