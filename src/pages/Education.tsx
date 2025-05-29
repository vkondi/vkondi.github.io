import {
  Box,
  Typography,
  Paper,
  Stack,
} from '@mui/material';

const education = [
  {
    degree: "BS in Information Technology (Hons)",
    school: "Solapur University",
    location: "Solapur, Maharashtra",
    duration: "2019 - 2023",
    grade: "8.1 CGPA",
    projects: [
      "Developed a full-stack web application as part of the final year project using Kotlin, Firebase, and Google Maps API.",
      "Collaborated with a team of 4 to design and implement a RESTful API for the application.",
      "Conducted manual and automated testing to identify and resolve defects.",
    ]
  },
  {
    degree: "HSC in Computer Science",
    school: "IVS Academy College",
    location: "Mumbai, Maharashtra",
    duration: "2017 - 2019",
    grade: "73.62%",
  }
];

const Education = () => {
  return (
    <Stack spacing={4}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Stack spacing={3}>
        {education.map((edu, index) => (
          <Paper
            key={index}
            variant="outlined"
            sx={{ p: 3 }}
          >
            <Typography variant="h6" gutterBottom>
              {edu.degree}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {edu.school}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {edu.location}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {edu.duration}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Grade: {edu.grade}
            </Typography>
            {edu.projects && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Key Projects
                </Typography>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  {edu.projects.map((project, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" color="text.secondary">
                        {project}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
};

export default Education; 