import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { usePortfolioData } from "../../context/DataContext";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { LABELS } from "../../utils/constants";
import ShowMoreButton from "../../components/ShowMoreButton";
import BlogCard from "../../components/BlogCard";

const BlogsSection = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const data = usePortfolioData();
  const blogs = data?.blogs ?? [];

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };
  const previewBlogs = expanded ? blogs : blogs.slice(0, 2);

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <SectionTitle title={LABELS.blogsTitle} />

      <Stack
        sx={{
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          gap: 1,
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        {previewBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </Stack>

      {/* Read More */}
      {blogs.length > 2 && (
        <ShowMoreButton
          expanded={expanded}
          onClick={toggleExpand}
          previewCount={2}
          totalCount={blogs.length}
        />
      )}
    </Box>
  );
};

export default BlogsSection;
