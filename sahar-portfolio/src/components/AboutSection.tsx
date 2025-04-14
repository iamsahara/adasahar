import { Box, Container, Stack, Typography, Paper } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        py: { xs: 4, md: 6 },
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h5" fontWeight={600}>
            My Story
          </Typography>

          <Paper
            elevation={2}
            sx={{
              padding: { xs: 3, sm: 4 },
              borderRadius: 3,
              backgroundColor: "#f9f9f9",
              maxWidth: "700px",
            }}
          >
            <Typography variant="body1" color="text.secondary" fontSize={16}>
              My journey into software engineering began with neural network modeling during my biomedical research days. I was fascinated by how abstract code could mimic complex systems — and even more excited when I discovered how rewarding it is to bring ideas to life through interactive, user-friendly web apps...
            </Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutSection;