// Import images directly
import minportImage from "../assets/images/projects/Minport.png";
import animeProjectImage from "../assets/images/projects/Animeproject.jpg";
import virtualPetGameImage from "../assets/images/projects/Virtual-pet-game.png";
import animeVidImage from "../assets/images/projects/Anime-vid.png";
import animeProjectWebpImage from "../assets/images/projects/Anime-project.webp";
import mondayDmImage from "../assets/images/projects/Monday-DM.jpg";
import tltCImage from "../assets/images/projects/TLT-C.jpg";
import movingForwardImage from "../assets/images/projects/Moving-forward.jpg";
import ecommerceImage from "../assets/images/projects/ecommerce.jpg";
import blogPlatformImage from "../assets/images/projects/blog-platform.jpg";
import calculatorImage from "../assets/images/projects/calculator.jpg";

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
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product listings, shopping cart, and checkout functionality.",
    image: ecommerceImage,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    category: "fullstack",
    demoLink: "https://ecommerce-demo.com",
    codeLink: "https://github.com/yourusername/ecommerce",
    featured: false,
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A content management system for creating and managing blog posts with user authentication.",
    image: blogPlatformImage,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    category: "fullstack",
    demoLink: "https://blog-platform-demo.com",
    codeLink: "https://github.com/yourusername/blog-platform",
    featured: false,
  },
  {
    id: "calculator",
    title: "JavaScript Calculator",
    description:
      "A fully functional calculator built with vanilla JavaScript, HTML, and CSS.",
    image: calculatorImage,
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    demoLink: "https://calculator-demo.com",
    codeLink: "https://github.com/yourusername/calculator",
    featured: false,
  },
  {
    id: "anime-vid",
    title: "Anime Video Platform",
    description:
      "A video streaming platform dedicated to anime content. Users can browse, search, and watch their favorite anime series and movies.",
    image: animeVidImage,
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    category: "fullstack",
    demoLink: "https://anime-vid.netlify.app/",
    codeLink: "https://github.com/Sweodin/anime-vid",
    featured: false,
  },
  {
    id: "anime-wiki",
    title: "Anime Wiki",
    description:
      "A comprehensive wiki for anime enthusiasts. Find detailed information about anime series, characters, studios, and more.",
    image: animeProjectWebpImage,
    technologies: ["React", "GraphQL", "Apollo", "Styled Components"],
    category: "frontend",
    demoLink: "https://anime-wiki.netlify.app/",
    codeLink: "https://github.com/Sweodin/anime-wiki",
    featured: false,
  },
  {
    id: "monday-dm",
    title: "Monday.com Clone",
    description:
      "A project management tool inspired by Monday.com. Organize tasks, track progress, and collaborate with team members.",
    image: mondayDmImage,
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    category: "fullstack",
    demoLink: "https://monday-dm.netlify.app/",
    codeLink: "https://github.com/Sweodin/monday-dm",
    featured: false,
  },
  {
    id: "tlt-c",
    title: "TLT-C Learning Platform",
    description:
      "An educational platform for learning programming languages. Features interactive lessons, coding challenges, and progress tracking.",
    image: tltCImage,
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
    category: "fullstack",
    demoLink: "https://tlt-c.netlify.app/",
    codeLink: "https://github.com/Sweodin/tlt-c",
    featured: false,
  },
  {
    id: "moving-forward",
    title: "Moving Forward",
    description:
      "A motivational web app that helps users set and track personal goals. Includes progress visualization and achievement badges.",
    image: movingForwardImage,
    technologies: ["React", "Firebase", "Tailwind CSS"],
    category: "frontend",
    demoLink: "https://moving-forward.netlify.app/",
    codeLink: "https://github.com/Sweodin/moving-forward",
    featured: false,
  },
];
