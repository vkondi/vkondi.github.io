import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ElementType } from "react";

const SectionTitle = ({
  title,
  IconComponent,
}: {
  title: string;
  IconComponent?: ElementType;
}) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 3,
        color: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 1,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      {IconComponent && <IconComponent />}
    </Box>
  );
};

export default SectionTitle;
