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
} from '@mui/icons-material';
import { usePortfolioData } from '../context/DataContext';
import ResumeDownload from '../components/ResumeDownload';
import WebsitePreview from '../components/WebsitePreview';

const Home = () => {
  const data = usePortfolioData();

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '800px',
        mx: 'auto',
        px: { xs: 2, sm: 3 }, // Responsive padding
      }}
    >
      <Stack spacing={8} alignItems="center" sx={{ width: '100%' }}>
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

        {/* Experience Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Experience
          </Typography>
          <Timeline position="alternate">
            {data.workExperience.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <Work />
                  </TimelineDot>
                  {index !== data.workExperience.length - 1 && <TimelineConnector />}
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
        </Box>

        {/* Projects Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Professional Projects
          </Typography>
          <Stack spacing={3}>
            {data.projects.map((project, index) => (
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
        </Box>

        {/* Education Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Education
          </Typography>
          <Timeline position="alternate">
            {data.education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <School />
                  </TimelineDot>
                  {index !== data.education.length - 1 && <TimelineConnector />}
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
        </Box>

        {/* Skills Section */}
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Skills
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
              borderRadius: 2,
            }}
          >
            <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="center">
              {data.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  sx={{
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                />
              ))}
            </Stack>
          </Paper>
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
      </Stack>
    </Box>
  );
};

export default Home; 