import { Box } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageWrapper;
