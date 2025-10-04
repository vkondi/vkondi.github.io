import PageWrapper from "../../components/PageWrapper";
import { usePortfolioData } from "../../context/DataContext";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { LABELS } from "../../utils/constants";
import TitleWithBack from "../../components/TitleWithBack";
import { useEffect } from "react";
import BlogCard from "../../components/BlogCard";

const Blogs = () => {
  const theme = useTheme();
  const data = usePortfolioData();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PageWrapper>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <TitleWithBack title={LABELS.blogsTitle} />

        <Stack
          sx={{
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            gap: 1,
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          {data.blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </Stack>
      </Box>
    </PageWrapper>
  );
};

export default Blogs;
