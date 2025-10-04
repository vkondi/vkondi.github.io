import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  EditNote,
} from "@mui/icons-material";
import { Avatar, Box, Link, Stack, Tooltip, Typography } from "@mui/material";
import { usePortfolioData } from "../../context/DataContext";

const ProfileSection = () => {
  const data = usePortfolioData();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 150,
          height: 150,
          mb: 3,
        }}
      >
        <Avatar
          src="/profile_image.jpg"
          alt={data.generalDetails.name}
          sx={{
            width: "100%",
            height: "100%",
            border: "4px solid",
            borderColor: "primary",
          }}
        />
      </Box>
      <Typography variant="h4" gutterBottom>
        {data.generalDetails.name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {data.workExperience[0].jobTitle} @ {data.workExperience[0].employer}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 2 }}
      >
        <LocationOn fontSize="small" color="action" />
        <Typography variant="body2" color="text.secondary">
          {data.workExperience[0].city}, {data.workExperience[0].country}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        {data.socialMedia.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            color="inherit"
            sx={{
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            {social.name === "Github" && (
              <Tooltip title="Connect on GitHub">
                <GitHub />
              </Tooltip>
            )}

            {social.name === "LinkedIn" && (
              <Tooltip title="Find me on LinkedIn">
                <LinkedIn />
              </Tooltip>
            )}

            {social.name === "Blogs" && (
              <Tooltip title="Checkout my Blogs">
                <EditNote />
              </Tooltip>
            )}
          </Link>
        ))}
        <Tooltip title="Send Email">
          <Link
            href={`mailto:${data.generalDetails.email}`}
            color="inherit"
            sx={{
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          >
            <Email />
          </Link>
        </Tooltip>
      </Stack>

      {/* Moved this feature in Header. This component can be reused later. */}
      {/* <ResumeDownload /> */}
    </Box>
  );
};

export default ProfileSection;
