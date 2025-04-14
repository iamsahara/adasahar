import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import "./App.css"


function App() {
  return (
    <Box>
      <HeroSection />
      <ProjectsSection/>
    </Box>
  );
}

export default App;