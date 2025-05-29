import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Circle as CircleIcon,
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
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
        gap: 2,
      }}>
        {/* Left side - Project Details */}
        <Box>
          <CardContent sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            textAlign: 'left',
          }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                {name}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                paragraph
                sx={{ textAlign: 'left' }}
              >
                {description}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2, gap: 1 }}>
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
            </Box>
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
          </CardContent>
        </Box>

        {/* Right side - Preview */}
        <Box>
          <Box 
            sx={{ 
              height: '300px',
              p: 2,
              bgcolor: 'background.paper',
            }}
          >
            {/* Browser Chrome */}
            <Box
              sx={{
                height: '100%',
                bgcolor: (theme) => 
                  theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Browser Header */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderBottom: '1px solid',
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                }}
              >
                {/* Window Controls */}
                <Stack direction="row" spacing={0.5}>
                  <CircleIcon sx={{ fontSize: 12, color: '#ff5f57' }} />
                  <CircleIcon sx={{ fontSize: 12, color: '#febc2e' }} />
                  <CircleIcon sx={{ fontSize: 12, color: '#28c840' }} />
                </Stack>
                {/* URL Bar */}
                <Box
                  sx={{
                    flex: 1,
                    ml: 1,
                    px: 2,
                    py: 0.5,
                    fontSize: '0.75rem',
                    borderRadius: '4px',
                    bgcolor: (theme) =>
                      theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)',
                    color: 'text.secondary',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {previewUrl}
                </Box>
              </Box>
              {/* Browser Content */}
              <Box sx={{ 
                height: 'calc(100% - 40px)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transform: 'scale(0.6)',
                    transformOrigin: '0 0',
                  }}
                >
                  <iframe
                    src={previewUrl}
                    title={name}
                    width="167%"
                    height="167%"
                    style={{
                      border: 'none',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default WebsitePreview; 