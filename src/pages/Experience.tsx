import {
  Box,
  Typography,
  Paper,
  Stack,
} from '@mui/material';

const experiences = [
  {
    role: "Web Development Intern",
    company: "PeopleResolve Services",
    duration: "May 2023 - Present",
    points: [
      "Assisted in .NET web application development using C#, ASP.NET, and SQL Server.",
      "Contributed to debugging, code reviews, and feature implementation.",
      "Conducted manual and automated testing to identify and resolve defects.",
    ]
  }
];

const Experience = () => {
  return (
    <Stack spacing={4}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Stack spacing={3}>
        {experiences.map((exp, index) => (
          <Paper
            key={index}
            variant="outlined"
            sx={{ p: 3 }}
          >
            <Typography variant="h6" gutterBottom>
              {exp.role}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {exp.company}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {exp.duration}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {exp.points.map((point, idx) => (
                  <li key={idx}>
                    <Typography variant="body2" color="text.secondary">
                      {point}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
};

export default Experience; 