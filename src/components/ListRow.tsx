import { Circle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

const ListRow = ({ icon, text }: { icon?: ReactNode; text: string }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "baseline", p: 0.5 }}>
      {/* Circle as default icon if no icon is provided */}
      {icon ?? (
        <Circle
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "rgb(255, 255, 255)" : "#000",
            fontSize: 8,
          }}
        />
      )}

      {/* Text */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ display: "inline-block", ml: 1 }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ListRow;
