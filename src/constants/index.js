import { BsRainbow } from "react-icons/bs";
import {
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  figma,
  // docker,
  meta,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  ems,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  // {
  //   title: "Data analyst",
  //   icon: backend,
  // },
  {
    title: "UI/UX Design",
    icon: creator,
  },
  
    
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2024",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 ];

const testimonials = [
  {
    testimonial:
      "The attention to detail and modern design make every project feel polished and professional.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The ability to transform ideas into functional and user-friendly applications is truly impressive.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The work demonstrates technical proficiency, creativity, and a commitment to building high-quality web applications.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
   name: "Car Rental Platform",
    subtitle: "Frontend / React",
    description:
      "A modern and responsive car rental platform that allows users to browse, search, and book rental cars with an intuitive and user-friendly interface.",
    features: [
      "User Authentication",
      "Car Search & Filters",
      "Booking Dashboard",
      "Responsive Design",
    ],
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/arbazmalik27/Car-Rent-and-sell",
    demo_link: "https://car-rent-and-sell-jwl1rwfxo-arbazmalik27s-projects.vercel.app",
  },
  // {
  //   name: "AI Study Material Generator",
  //   subtitle: "AI / SaaS",
  //   description:
  //     "An intelligent learning platform that generates personalized study materials, quizzes, and structured courses using the Gemini AI model — with integrated payments and authentication.",
  //   features: [
  //     "AI Content Generation",
  //     "Personalized Courses",
  //     "Stripe Payments",
  //     "Clerk Auth",
  //   ],
  //   tags: [
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Gemini AI",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "PostgreSQL",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  //   demo_link: "https://example.com/",
  // },
  {
  name: "Employee Management System",
  subtitle: "Full Stack / Dashboard",
  description:
    "A modern role-based Employee Management System featuring Admin & Employee dashboards, task management, analytics, authentication, and a premium responsive UI.",
  features: [
    "Role-Based Authentication",
    "Task Management",
    "Analytics Dashboard",
    "Responsive UI",
  ],
  tags: [
    {
      name: "React.js",
      color: "blue-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "green-text-gradient",
    },
    {
      name: "Context API",
      color: "pink-text-gradient",
    },
    {
      name: "LocalStorage",
      color: "blue-text-gradient",
    },
    {
      name: "Recharts",
      color: "green-text-gradient",
    },
    {
      name: "Framer Motion",
      color: "pink-text-gradient",
    },
  ],
  image: ems,
  source_code_link: "https://github.com/arbazmalik27/employee-management-system",
  demo_link: "https://employee-management-system-74bn6hb3k-arbazmalik27s-projects.vercel.app",
},
];

export { services, technologies, experiences, testimonials, projects };