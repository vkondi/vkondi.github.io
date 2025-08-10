import { Box, Typography, Paper, Stack, Chip, Avatar } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { School } from "@mui/icons-material";
import { usePortfolioData } from "../../context/DataContext";
import WebsitePreview from "../../components/WebsitePreview";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ShowMoreButton from "../../components/ShowMoreButton";
import ProfileSection from "./ProfileSection";
import AboutSection from "./AboutSection";
import ListRow from "../../components/ListRow";
import SkillsSection from "./SkillsSection";
import { format } from "date-fns";
import { DATE_FORMAT } from "../../utils/constants";
import { getYearsAndMonthsDifference } from "../../utils/utility";
import PageWrapper from "../../components/PageWrapper";

const Home = () => {
  const theme = useTheme();
  const data = usePortfolioData();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    projects: false,
    education: false,
    personalProjects: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getVisibleItems = <T,>(
    items: T[],
    section: keyof typeof expandedSections
  ): T[] => {
    return expandedSections[section] ? items : items.slice(0, 2);
  };

  return (
    <PageWrapper>
      {/* Profile Section */}
      <ProfileSection />

      {/* About Section */}
      <AboutSection isMobile={isMobile} />

      {/* Skills Section */}
      <SkillsSection isMobile={isMobile} />

      {/* Experience Section */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Experience
        </Typography>
        <Timeline
          position={isMobile ? "right" : "alternate"}
          sx={{
            "& .MuiTimelineItem-root": {
              width: "100%",
            },
            "& .MuiTimelineItem-root::before": {
              flex: isMobile ? 0 : 1,
              ...(isMobile ? { padding: 0 } : {}),
            },
          }}
        >
          {getVisibleItems(data.workExperience, "experience").map(
            (exp, index, visibleItems) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{ padding: 0, backgroundColor: "transparent" }}
                  >
                    <Avatar
                      src={exp.logo}
                      alt={exp.employer}
                      sx={{
                        width: 40,
                        height: 40,
                      }}
                    />
                  </TimelineDot>
                  {index !== visibleItems.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.02)",
                      borderRadius: 2,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Typography variant="h6" component="div">
                      {exp.jobTitle}
                    </Typography>
                    <Typography color="text.secondary">
                      {exp.employer}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.city}, {exp.country}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {format(new Date(exp.startDate), DATE_FORMAT)} -{" "}
                      {exp.endDate
                        ? format(new Date(exp.endDate), DATE_FORMAT)
                        : "Present"}{" "}
                      (
                      {getYearsAndMonthsDifference(
                        new Date(exp.startDate),
                        exp.endDate ? new Date(exp.endDate) : new Date()
                      )}
                      )
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            )
          )}
        </Timeline>
        {data.workExperience.length > 2 && (
          <ShowMoreButton
            expanded={expandedSections.experience}
            onClick={() => toggleSection("experience")}
            itemCount={2}
            totalCount={data.workExperience.length}
          />
        )}
      </Box>

      {/* Preview Websites Section */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Personal Projects
        </Typography>
        <Stack spacing={3}>
          {getVisibleItems(data.previewWebsites, "personalProjects").map(
            (site, index) => (
              <WebsitePreview key={index} {...site} />
            )
          )}
        </Stack>
        {data.previewWebsites.length > 2 && (
          <ShowMoreButton
            expanded={expandedSections.personalProjects}
            onClick={() => toggleSection("personalProjects")}
            itemCount={2}
            totalCount={data.previewWebsites.length}
          />
        )}
      </Box>

      {/* Education Section */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Education
        </Typography>
        <Timeline
          position={isMobile ? "right" : "alternate"}
          sx={{
            "& .MuiTimelineItem-root": {
              width: "100%",
            },
            "& .MuiTimelineItem-root::before": {
              flex: isMobile ? 0 : 1,
              ...(isMobile ? { padding: 0 } : {}),
            },
          }}
        >
          {getVisibleItems(data.education, "education").map(
            (edu, index, visibleItems) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <School />
                  </TimelineDot>
                  {index !== visibleItems.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.02)",
                      borderRadius: 2,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Typography variant="h6" component="div">
                      {edu.degree}
                    </Typography>
                    <Typography color="text.secondary">{edu.school}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.city}, {edu.country}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {format(new Date(edu.startDate), DATE_FORMAT)} -{" "}
                      {format(new Date(edu.endDate), DATE_FORMAT)}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      GPA: {edu.gpa}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            )
          )}
        </Timeline>
        {data.education.length > 2 && (
          <ShowMoreButton
            expanded={expandedSections.education}
            onClick={() => toggleSection("education")}
            itemCount={2}
            totalCount={data.education.length}
          />
        )}
      </Box>

      {/* Projects Section */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Professional Projects
        </Typography>
        <Stack spacing={3}>
          {getVisibleItems(data.projects, "projects").map((project, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.02)",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateX(10px)",
                },
                textAlign: "left",
              }}
            >
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              {/* Tags */}
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{ mb: 2, gap: 1 }}
              >
                {(project?.tags ?? []).map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.05)",
                    }}
                  />
                ))}
              </Stack>

              {/* Description */}
              {(project?.descriptions ?? []).map((desc, descIndex) => (
                <ListRow text={desc} key={descIndex} />
              ))}

              {/* Duration */}
              <Typography variant="caption" color="text.primary">
                {format(new Date(project.startDate), DATE_FORMAT)} -{" "}
                {project.endDate
                  ? format(new Date(project.endDate), DATE_FORMAT)
                  : "Present"}
              </Typography>
            </Paper>
          ))}
        </Stack>
        {data.projects.length > 2 && (
          <ShowMoreButton
            expanded={expandedSections.projects}
            onClick={() => toggleSection("projects")}
            itemCount={2}
            totalCount={data.projects.length}
          />
        )}
      </Box>
    </PageWrapper>
  );
};

export default Home;
