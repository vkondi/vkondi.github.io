import { Box, Tooltip, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TitleWithBack = ({ title = "" }: { title: string }) => {
  return (
    <Box
      sx={{
        width: "100%",
        mb: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Tooltip title="Back">
        <Link
          to="/"
          style={{
            color: "inherit",
            height: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <ArrowBackIcon fontSize="large" />
        </Link>
      </Tooltip>

      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};

export default TitleWithBack;
