import { Box, Container, Stack, Typography, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typed from "typed.js";
import AboutSection from "./AboutSection";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const typedElementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full-Stack Developer",
        "Software Engineer",
        "Problem Solver",
        "Creative Thinker",
        "Bridging Ideas with Code",
        "Cat Mom 🐱"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedElementRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: "80vh", md: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#0a192f",
        color: "white",
        px: 2,
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Box
            component="img"
            src="src/assets/img/Image.jpeg"
            alt="Sahar Abdollahi"
            sx={{
              width: { xs: 150, sm: 180, md: 200 },
              height: { xs: 150, sm: 180, md: 200 },
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: 4,
            }}
          />

          <Typography variant="h2" fontWeight={700}>
            Sahar Abdollahi
          </Typography>

          <Typography variant="h6" color="gray">
            <span ref={typedElementRef} />
          </Typography>

          <Button
            variant="contained"
            href="src/assets/resume/sahar_resume.pdf"
            download
            startIcon={<LinkedInIcon />}
            sx={{ textTransform: "none", px: 4 }}
          >
            Download Resume
          </Button>

          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://github.com/iamsahara"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              sx={{ color: "white" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/saharabdollahi/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              sx={{ color: "white" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
      <AboutSection />
    </Box>
  );
};

export default HeroSection;