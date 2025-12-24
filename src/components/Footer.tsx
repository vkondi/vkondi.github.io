import { Box, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        p: 1.5,
        bottom: 0,
        width: "100vw",
        textAlign: "center",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="subtitle2" color="text.disabled">
        Copyright © {currentYear} Vishwajeet Kondi. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
