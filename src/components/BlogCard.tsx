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
import blogCoverImgPlaceholder from "../assets/blog_cover_img_placeholder.jpg"; // Import placeholder image

const BlogCard = ({ blog }: { blog: Article }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // Use placeholder if cover_image is missing
  const coverImage = blog?.cover_image || blogCoverImgPlaceholder;

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
      <Box>
        {/* Cover Image */}
        <img
          src={coverImage}
          alt={blog.title}
          style={{
            width: "100%",
            height: "100%",
          }}
        />

        {/* Blog details */}
        <Box sx={{ textAlign: "left", flex: 1, p: isMobile ? 1 : 2 }}>
          <Stack spacing={1}>
            {/* Title */}
            <Typography
              variant="subtitle1"
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
