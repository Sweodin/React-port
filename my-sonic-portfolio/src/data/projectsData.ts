// Import images directly - only use the ones that actually exist
import minportImage from "../assets/images/projects/Minport.png";
import animeProjectImage from "../assets/images/projects/Animeproject.jpg";
import virtualPetGameImage from "../assets/images/projects/Virtual-pet-game.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "web" | "frontend" | "fullstack" | string;
  demoLink?: string;
  codeLink?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Dive into my personal portfolio website. A dynamic showcase of my skills built with HTML, SCSS, and JavaScript. Experience a nostalgic journey through a Sonic the Hedgehog-inspired theme, bringing a touch of retro gaming flair to my web development work.",
    image: minportImage,
    technologies: ["HTML", "SCSS", "JavaScript"],
    category: "frontend",
    demoLink: "https://sweodin.github.io/Portfolio/",
    codeLink: "https://github.com/Sweodin/Portfolio",
    featured: true,
  },
  {
    id: "Anime Search App",
    title: "Explore the vast world of Anime.",
    description:
      "With my Anime Search App. This application leverages the Jikan API to provide a seamless experience for discovering new and favorite anime titles, all within a sleek and contemporary user interface.",
    image: animeProjectImage,
    technologies: ["React", "Node.js", "Express", "MongoDB", "API"],
    category: "fullstack",
    demoLink: "https://imaginative-lamington-46988f.netlify.app/",
    codeLink: "https://github.com/Sweodin/Anime-Api",
    featured: true,
  },
  {
    id: "Virtual Pet Game",
    title:
      "An interactive virtual pet game with animations and game mechanics.",
    description:
      "Engage with a charming digital companion in my Virtual Pet Game. This project brings a virtual pet to life with captivating animations and engaging game mechanics, offering an interactive and entertaining experience.",
    image: virtualPetGameImage,
    technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    category: "web",
    demoLink: "https://sweodin.github.io/Virtual-Pet-Game/",
    codeLink: "https://github.com/Sweodin/Virtual-Pet-Game",
    featured: true,
  }
];
