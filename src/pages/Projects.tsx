import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
  {
    name: "FINTRAKR",
    description: "A modern multi-user investment portfolio tracker with real-time analytics and visual insights for managing family/group finances across diverse platforms",
    previewUrl: "https://fintrakr-flame.vercel.app/",
    repoUrl: "https://github.com/vkondi/fin-tracker",
    tags: ["react", "fin-tech"],
  },
  {
    name: "Random Roster",
    description: "A modern web app for fair and effortless team organization through smart randomization tools.",
    previewUrl: "https://random-roster.vercel.app/",
    repoUrl: "https://github.com/vkondi/random-roster",
    tags: ["team collab", "nextjs"],
  },
];

const Projects = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.name}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} variant="outlined" size="small" />
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<Launch />}
                  href={project.previewUrl}
                  target="_blank"
                >
                  Live Demo
                </Button>
                <Button
                  startIcon={<GitHub />}
                  href={project.repoUrl}
                  target="_blank"
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 