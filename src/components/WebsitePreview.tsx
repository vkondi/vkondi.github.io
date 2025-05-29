import { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
  IconButton,
  Collapse,
} from '@mui/material';
import {
  GitHub,
  Launch,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

interface WebsitePreviewProps {
  name: string;
  description: string;
  previewUrl: string;
  repoUrl: string;
  tags: string[];
}

const WebsitePreview = ({
  name,
  description,
  previewUrl,
  repoUrl,
  tags,
}: WebsitePreviewProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card 
      variant="outlined" 
      sx={{ 
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: (theme) => theme.shadows[4],
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{
                borderRadius: '4px',
                backgroundColor: (theme) => 
                  theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <Box sx={{ px: 2, pb: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={1}>
            <Button
              startIcon={<Launch />}
              href={previewUrl}
              target="_blank"
              size="small"
              variant="contained"
              color="primary"
            >
              Live Demo
            </Button>
            <Button
              startIcon={<GitHub />}
              href={repoUrl}
              target="_blank"
              size="small"
              variant="outlined"
            >
              Source Code
            </Button>
          </Stack>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            size="small"
            sx={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Stack>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ p: 2, height: '500px', bgcolor: 'background.paper' }}>
          <iframe
            src={previewUrl}
            title={name}
            width="100%"
            height="100%"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius: '4px',
            }}
          />
        </Box>
      </Collapse>
    </Card>
  );
};

export default WebsitePreview; 