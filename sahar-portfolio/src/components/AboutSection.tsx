import { Box, Typography, Paper } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left"
      }}
    >
      <Typography variant="h5" fontWeight={600} mb={2}>
        My Story
      </Typography>
      <Box sx={{flex: 1, minWidth: 0}} >

      <Paper
        elevation={0}
        
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Typography variant="body1" color="text.primary" fontSize={16} >
          My journey into software engineering began with neural network modeling during my biomedical research days. I was fascinated by how abstract code could mimic complex systems — and even more excited when I discovered how rewarding it is to bring ideas to life through interactive, user-friendly web apps...
        </Typography>
      </Paper>
      </Box>
    </Box>
  );
};

export default AboutSection;