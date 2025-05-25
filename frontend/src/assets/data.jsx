import { Cloud, Code, Database, Github, Server, ShieldCheck } from "lucide-react";

export const navItems = [
  {
    id: "home",
    label: "Home",
    href: "#",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "expertise",
    label: "Expertise",
    href: "#expertise",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];

export const expertise = [
  {
    icon: <Code stroke="#f67655"/>,
    title1: "Front-End",
    title2: "Development",
    paragraph: "Building responsive and user-friendly interfaces using modern web technologies and frameworks.",
    technologies: ['React', 'Vue', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript']
  },
  {
    icon: <Server stroke="#f67655"/>,
    title1: "Back-End",
    title2: "Development",
    paragraph: "Creating robust server-side logic, APIs, and database management for scalable applications.",
    technologies: ['Node.js', 'Express', 'Django', 'Ruby on Rails', 'Java', 'PHP']
  },
  {
    icon: <Database stroke="#f67655"/>,
    title1: "Database",
    title2: "Management",
    paragraph: "Designing and maintaining relational and non-relational databases ensuring data integrity and security.",
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite']
  },
  {
    icon: <Cloud stroke="#f67655"/>,
    title1: "Cloud",
    title2: "Deployment",
    paragraph: "Deploying and managing applications on cloud platforms for high availability and scalability.",
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
  },
  {
    icon: <Github stroke="#f67655"/>, 
    title1: "Version",
    title2: "Control",
    paragraph: "Collaborating using version control systems to manage codebase efficiently and track changes.",
    technologies: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
  },
  {
    icon: <ShieldCheck stroke="#f67655"/>, 
    title1: "Security",
    title2: "Best Practices",
    paragraph: "Implementing security measures to protect applications against common vulnerabilities and threats.",
    technologies: ['OAuth', 'JWT', 'HTTPS', 'CORS', 'OWASP guidelines']
  }
]

export const experience = [
  {
    date: "2025 - Present",
    role: "Full Stack Developer",
    projectTitle: "Elegance E-commerce Website (Personal Project)",
    description:
      "Built a fully functional e-commerce site named Elegance featuring category filtering, cart system, dynamic product pages, and WhatsApp-based order integration using HTML, CSS, JavaScript, and Firebase.",
    keyAchievements: [
      "Created dynamic routing between product categories and product details pages",
      "Implemented a reusable cart system with local storage support",
      "Integrated a custom WhatsApp checkout workflow for direct order processing",
    ],
  },
  {
    date: "2024 - Present",
    role: "Freelance Tutor",
    projectTitle: "Computer Science & Web Development Tutor",
    description:
      "Provide online and in-person tutoring to university and college students in programming, data structures, and full-stack development concepts.",
    keyAchievements: [
      "Helped over 15 students understand core web development principles",
      "Designed personalized study plans based on individual student needs",
      "Taught fundamentals of JavaScript, React, and Git through hands-on exercises",
    ],
  },
  {
    date: "2022 - Present",
    role: "BSCS Student",
    projectTitle: "University of Central Punjab (Semester 6)",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science, actively working on real-world projects to apply academic knowledge in practical contexts.",
    keyAchievements: [
      "Completed multiple semester projects in web development and databases",
      "Participated in coding competitions and hackathons",
      "Collaborated on team-based software engineering assignments",
    ],
  },
];
