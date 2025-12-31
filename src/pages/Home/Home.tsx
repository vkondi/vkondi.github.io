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
import { DATE_FORMAT, LABELS } from "../../utils/constants";
import { getYearsAndMonthsDifference } from "../../utils/utility";
import PageWrapper from "../../components/PageWrapper";
import SectionTitle from "../../components/SectionTitle";
import BlogsSection from "./BlogsSection";
import SeeAllIcon from "../../components/SeeAllIcon";
import SEO from "../../components/SEO";

const PersonalProjectsLink = () => {
  return (
    <SeeAllIcon title="See all Personal Projects" navTo="/personal-projects" />
  );
};

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

  const previewWebsites =
    Array.isArray(data?.previewWebsites) && data?.previewWebsites?.length
      ? data.previewWebsites.slice(0, 4)
      : [];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getVisibleItems = <T,>(
    items: T[],
    section: keyof typeof expandedSections,
  ): T[] => {
    return expandedSections[section] ? items : items.slice(0, 2);
  };

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Vishwajeet Kondi's portfolio. Explore my experience, projects, skills, and latest blog posts in software development."
        keywords={["portfolio", "software developer", "full stack developer", "react", "javascript", "web development"]}
        url="/"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://vishwajeetkondi.vercel.app/#website",
              "url": "https://vishwajeetkondi.vercel.app",
              "name": "Vishwajeet Kondi - Portfolio",
              "description": "Portfolio website showcasing my work and experience in software development",
              "publisher": {
                "@id": "https://vishwajeetkondi.vercel.app/#person"
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://vishwajeetkondi.vercel.app/?s={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              ],
              "inLanguage": "en-US"
            },
            {
              "@type": "Person",
              "@id": "https://vishwajeetkondi.vercel.app/#person",
              "name": "Vishwajeet Kondi",
              "image": {
                "@type": "ImageObject",
                "inLanguage": "en-US",
                "@id": "https://vishwajeetkondi.vercel.app/#/schema/person/image/",
                "url": "https://vishwajeetkondi.vercel.app/profile_image.jpg",
                "contentUrl": "https://vishwajeetkondi.vercel.app/profile_image.jpg",
                "width": 400,
                "height": 400,
                "caption": "Vishwajeet Kondi"
              },
              "description": "Full Stack Software Developer specializing in React, Node.js, and modern web technologies",
              "sameAs": [
                "https://github.com/vkondi",
                "https://linkedin.com/in/vishwajeetkondi"
              ],
              "jobTitle": "Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Various Companies"
              },
              "knowsAbout": [
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "Web Development"
              ]
            }
          ]
        }}
      />
      <PageWrapper>
      {/* Profile Section */}
      <ProfileSection />

      {/* About Section */}
      <AboutSection isMobile={isMobile} />

      {/* Skills Section */}
      <SkillsSection isMobile={isMobile} />

      {/* Experience Section */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <SectionTitle title={LABELS.experienceTitle} />
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
                        exp.endDate ? new Date(exp.endDate) : new Date(),
                      )}
                      )
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ),
          )}
        </Timeline>
        {data.workExperience.length > 2 && (
          <ShowMoreButton
            expanded={expandedSections.experience}
            onClick={() => toggleSection("experience")}
            previewCount={2}
            totalCount={data.workExperience.length}
          />
        )}
      </Box>

      {/* Preview Websites Section */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <SectionTitle
          title={LABELS.personalProjectsTitle}
          IconComponent={PersonalProjectsLink}
        />
        <Stack spacing={3}>
          {getVisibleItems(previewWebsites, "personalProjects").map(
            (site, index) => (
              <WebsitePreview key={index} {...site} />
            ),
          )}
        </Stack>
        {previewWebsites.length > 2 && (
          <ShowMoreButton
            expanded={expandedSections.personalProjects}
            onClick={() => toggleSection("personalProjects")}
            previewCount={2}
            totalCount={previewWebsites.length}
          />
        )}
      </Box>

      {/* Education Section */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <SectionTitle title={LABELS.educationTitle} />
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
            ),
          )}
        </Timeline>
        {data.education.length > 2 && (
          <ShowMoreButton
            expanded={expandedSections.education}
            onClick={() => toggleSection("education")}
            previewCount={2}
            totalCount={data.education.length}
          />
        )}
      </Box>

      {/* Projects Section */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <SectionTitle title={LABELS.professionalProjectsTitle} />
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
            previewCount={2}
            totalCount={data.projects.length}
          />
        )}
      </Box>

      {/* Blogs Section */}
      <BlogsSection />
      </PageWrapper>
    </>
  );
};

export default Home;
