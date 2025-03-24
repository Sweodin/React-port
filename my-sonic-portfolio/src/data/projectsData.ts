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

function getImagePath(imageName: string) {
  return new URL(`../assets/images/projects/${imageName}`, import.meta.url)
    .href;
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Dive into my personal portfolio website. A dynamic showcase of my skills built with HTML, SCSS, and JavaScript. Experience a nostalgic journey through a Sonic the Hedgehog-inspired theme, bringing a touch of retro gaming flair to my web development work.",
    image: getImagePath("Minport.png"),
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
    image: getImagePath("Animeproject.jpg"),
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
    image: getImagePath("Virtual-pet-game.png"),
    technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    category: "web",
    demoLink: "#",
    codeLink: "https://github.com/Sweodin/Pet-game",
    featured: true,
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product listings, shopping cart, and checkout functionality.",
    image: "/assets/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    category: "fullstack",
    demoLink: "https://ecommerce-demo.com",
    codeLink: "https://github.com/yourusername/ecommerce",
    featured: true,
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A content management system for creating and managing blog posts with user authentication.",
    image: "/assets/images/projects/blog-platform.jpg",
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
    image: "/assets/images/projects/calculator.jpg",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    demoLink: "https://calculator-demo.com",
    codeLink: "https://github.com/yourusername/calculator",
    featured: false,
  },
];
