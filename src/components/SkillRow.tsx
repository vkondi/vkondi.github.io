import { Box, Typography } from "@mui/material";

const SkillRow = ({ title, skills }: { title: string; skills: string[] }) => {
  const formattedSkills = skills.toString().replace(/,/g, ", ");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "start",
        textAlign: "left",
        gap: 1,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          mr: 1,
          margin: 0,
          minWidth: "130px",
          wordBreak: "break-word",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ whiteSpace: "wrap", wordBreak: "break-word", flex: 1 }}
      >
        {formattedSkills}
      </Typography>
    </Box>
  );
};

export default SkillRow;
