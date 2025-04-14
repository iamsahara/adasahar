// Project type
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    githubUrl?: string;
    liveDemoUrl?: string;
  }
  
  // Social link type
  export interface SocialLink {
    name: "GitHub" | "LinkedIn" | "Twitter" | "Other";
    url: string;
    icon: React.ReactNode;
  }