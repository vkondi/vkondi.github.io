import {
  Box,
  Typography,
  Paper,
  Chip,
  Stack,
  Avatar,
  Link,
  Grid,
  Tooltip,
  Container,
  Button,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { 
  GitHub, 
  LinkedIn, 
  LocationOn, 
  Work, 
  School,
  Email,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';
import { usePortfolioData } from '../context/DataContext';
import ResumeDownload from '../components/ResumeDownload';
import WebsitePreview from '../components/WebsitePreview';
import { useState } from 'react';

const SkillChip = ({ skill }: { skill: string }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        m: 0.5,
        px: 2,
        py: 1,
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: 500,
        color: 'text.primary',
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: 'primary.main',
        transition: 'all 0.3s ease-in-out',
        cursor: 'default',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: (theme) => `0 4px 20px ${theme.palette.primary.main}25`,
          backgroundColor: 'primary.main',
          color: 'white',
          '&::before': {
            opacity: 1,
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '20px',
          background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}15, ${theme.palette.primary.light}15)`,
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
        },
      }}
    >
      {skill}
    </Box>
  );
};

interface ShowMoreButtonProps {
  expanded: boolean;
  onClick: () => void;
  itemCount: number;
  totalCount: number;
}

const ShowMoreButton = ({ expanded, onClick, itemCount, totalCount }: ShowMoreButtonProps) => (
  <Button
    onClick={onClick}
    startIcon={expanded ? <ExpandLess /> : <ExpandMore />}
    sx={{
      mt: 2,
      color: 'text.secondary',
      '&:hover': {
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
      },
    }}
  >
    {expanded ? 'Show Less' : `Show ${totalCount - itemCount} More`}
  </Button>
);

const Home = () => {
  const data = usePortfolioData();
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    projects: false,
    education: false,
    personalProjects: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getVisibleItems = <T,>(items: T[], section: keyof typeof expandedSections): T[] => {
    return expandedSections[section] ? items : items.slice(0, 2);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 800,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {/* Profile Section */}
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: 150,
              height: 150,
              mb: 3,
            }}
          >
            <Avatar
              src="/profile.jpg"
              alt={data.generalDetails.name}
              sx={{
                width: '100%',
                height: '100%',
                border: '4px solid',
                borderColor: 'primary.main',
              }}
            />
          </Box>
          <Typography variant="h4" gutterBottom>
            {data.generalDetails.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {data.workExperience[0].jobTitle} at {data.workExperience[0].employer}
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
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center"
            sx={{ mb: 3 }}
          >
            {data.socialMedia.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                color="inherit"
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              >
                {social.name === 'Github' ? <GitHub /> : <LinkedIn />}
              </Link>
            ))}
            <Tooltip title="Send Email">
              <Link
                href={`mailto:${data.generalDetails.email}`}
                color="inherit"
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              >
                <Email />
              </Link>
            </Tooltip>
          </Stack>
          <ResumeDownload />
        </Box>

        {/* About Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            About Me
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{
              textAlign: 'justify',
              lineHeight: 1.8,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
              p: 3,
              borderRadius: 2,
            }}
          >
            {data.aboutMe}
          </Typography>
        </Box>

        {/* Skills Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Skills
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'center',
              p: 3,
              '& > *': {
                animation: 'fadeInUp 0.5s ease-out forwards',
              },
              '@keyframes fadeInUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(20px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            {data.skills.map((skill, index) => (
              <Box
                key={skill}
                sx={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <SkillChip skill={skill} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Experience Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Experience
          </Typography>
          <Timeline 
            position="alternate"
            sx={{
              '& .MuiTimelineItem-root': {
                width: '100%',
              },
            }}
          >
            {getVisibleItems(data.workExperience, 'experience').map((exp, index, visibleItems) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <Work />
                  </TimelineDot>
                  {index !== visibleItems.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                      borderRadius: 2,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
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
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
          {data.workExperience.length > 2 && (
            <ShowMoreButton
              expanded={expandedSections.experience}
              onClick={() => toggleSection('experience')}
              itemCount={2}
              totalCount={data.workExperience.length}
            />
          )}
        </Box>

        {/* Projects Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Professional Projects
          </Typography>
          <Stack spacing={3}>
            {getVisibleItems(data.projects, 'projects').map((project, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(10px)',
                  },
                  textAlign: 'left',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {project.subTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {project.startDate} - {project.endDate || 'Present'}
                </Typography>
              </Paper>
            ))}
          </Stack>
          {data.projects.length > 2 && (
            <ShowMoreButton
              expanded={expandedSections.projects}
              onClick={() => toggleSection('projects')}
              itemCount={2}
              totalCount={data.projects.length}
            />
          )}
        </Box>

        {/* Education Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Education
          </Typography>
          <Timeline 
            position="alternate"
            sx={{
              '& .MuiTimelineItem-root': {
                width: '100%',
              },
            }}
          >
            {getVisibleItems(data.education, 'education').map((edu, index, visibleItems) => (
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
                        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                      borderRadius: 2,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    <Typography variant="h6" component="div">
                      {edu.degree}
                    </Typography>
                    <Typography color="text.secondary">
                      {edu.school}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.city}, {edu.country}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.startDate} - {edu.endDate}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      GPA: {edu.gpa}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
          {data.education.length > 2 && (
            <ShowMoreButton
              expanded={expandedSections.education}
              onClick={() => toggleSection('education')}
              itemCount={2}
              totalCount={data.education.length}
            />
          )}
        </Box>

        {/* Preview Websites Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Personal Projects
          </Typography>
          <Stack spacing={3}>
            {data.previewWebsites.map((site, index) => (
              <WebsitePreview key={index} {...site} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Home; 