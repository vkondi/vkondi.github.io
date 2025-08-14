import {
  Box,
  Card,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { Article } from "../context/DataContext";
import { format } from "date-fns";
import { DATE_FORMAT } from "../utils/constants";

const BlogCard = ({ blog }: { blog: Article }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const onCardClick = () => {
    window.open(blog.url, "_blank");
  };

  return (
    <Card
      onClick={onCardClick}
      variant="outlined"
      sx={{
        width: isMobile ? "100%" : "49%",
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          cursor: "pointer",
          boxShadow: (theme) => theme.shadows[4],
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        sx={{
          p: isMobile ? 1 : 2,
        }}
      >
        {/* Right/Bottom side - blog details */}
        <Box sx={{ textAlign: "left", flex: 1 }}>
          <Stack spacing={1}>
            {/* Title */}
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {blog.title}
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="text.secondary">
              {blog.description}
            </Typography>

            {/* Publish date */}
            <Typography variant="caption" color="text.secondary" align="right">
              {format(new Date(blog.published_at), DATE_FORMAT)}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

export default BlogCard;
