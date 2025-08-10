import PageWrapper from "../../components/PageWrapper";
import WebsitePreview from "../../components/WebsitePreview";
import { usePortfolioData } from "../../context/DataContext";
import { Box, Stack } from "@mui/material";
import { LABELS } from "../../utils/constants";
import TitleWithBack from "../../components/TitleWithBack";

const PersonalProjects = () => {
  const data = usePortfolioData();
  return (
    <PageWrapper>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <TitleWithBack title={LABELS.personalProjectsTitle} />

        <Stack spacing={3}>
          {data.previewWebsites.map((site, index) => (
            <WebsitePreview key={index} {...site} />
          ))}
        </Stack>
      </Box>
    </PageWrapper>
  );
};

export default PersonalProjects;
