import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "MedPass",
    description:
      "A centralized healthcare platform for specialist referrals with secure login, OpenStreetMap, and JWT auth.",
    image: "srcsrc/assets/img/projects/MedPass.jpg",
    tech: ["HTML", "JavaScript", "React", "SASS", "Node.js", "MySQL", "JWT"],
    links: [
      { label: "GitHub - Server", url: "https://github.com/iamsahara/medpass-server" },
      { label: "GitHub - Frontend", url: "https://github.com/iamsahara/medpass" },
    ],
  },
  {
    title: "Task Manager",
    description:
      "A task management app with drag-and-drop features, animations, and responsive design.",
    image: "srcsrc/assets/img/projects/task-management.png",
    tech: ["HTML", "TypeScript", "React", "Express"],
    links: [
      { label: "GitHub", url: "https://github.com/iamsahara/task-manager" },
    ],
  },
  {
    title: "InStock",
    description:
      "An inventory system built with Agile workflow and GitFlow, responsive full-stack app.",
    image: "srcsrc/assets/img/projects/inStock.png",
    tech: ["HTML", "JavaScript", "React", "SASS", "Node.js", "MySQL"],
    links: [],
  },
  {
    title: "BandSite",
    description:
      "A React and Express based project built during training at BrainStation. It was a fun learning experience that sparked ideas for future projects.",
    image: "srcsrc/assets/img/projects/bandsite.png",
    tech: ["HTML", "JavaScript", "React", "Express"],
    links: [
      { label: "Live Site", url: "https://bandsitebysahar.netlify.app/" },
    ],
  },
  {
    title: "Sahara Portfolio",
    description:
      "This second version of my portfolio was created to learn Tailwind CSS. I moved from traditional CSS to a utility-first approach, improving design flexibility.",
    image: "srcsrc/assets/img/projects/sahara-portfolio.png",
    tech: ["HTML", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/iamsahara/my-portfolio-tailwind",
      },
    ],
  },
  {
    title: "Sadaf Portfolio",
    description:
      "A minimalist yet elegant personal portfolio built for a Marketing graduate. It highlights creativity, storytelling, and a user-friendly layout.",
    image: "srcsrc/assets/img/sadaf.png",
    tech: ["HTML", "SASS"],
    links: [
      {
        label: "Live Site",
        url: "https://sadafabdollahi.com/",
      },
    ],
  },
  {
    title: "Velora Bakery",
    description:
      "An interactive cake customization and ordering app designed with a focus on user experience and visual creativity.",
    image: "srcsrc/assets/img/projects/velora-bakery.png",
    tech: ["React", "TypeScript", "Fabric.js", "Supabase", "PostgreSQL", "MUI"],
    links: [
      {
        label: "Live Site",
        url: "https://velorabakery.ca",
      },
      {
        label: "GitHub",
        url: "https://github.com/iamsahara/spice-and-sugars",
      },
    ],
  },
];

const ProjectsSection = () => {

  return (
    <Box id="projects"  sx={{ width:"70rem",
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        scrollSnapAlign: "start",
        m:1,
        background:"red",
        py:4,
        px:8
        // scrollbarWidth: "none",
        // "&::-webkit-scrollbar": {
        //   display: "none",
        // },
      }}>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap:2
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 300,
              maxWidth: 360,
              scrollSnapAlign: "start",
              boxShadow: 3,
              borderRadius: 3,
              flex: "0 0 auto",
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              height="180"
            />
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={1}>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {project.description}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
                {project.tech.map((tech, i) => (
                  <Chip key={i} label={tech} size="small" />
                ))}
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {project.links.map((link, i) => (
                  <Button
                    key={i}
                    size="small"
                    variant="outlined"
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;
