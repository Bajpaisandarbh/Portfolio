import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  indibus,
  tesla,
  shopify,
  cybercrime,
  hirez,
  deepfake,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Developer",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Intern",
    company_name: "Indibus Pvt. Ltd.",
    icon: indibus,
    iconBg: "#383E56",
    date: "5th June 2024 - 20th July 2024",
    points: [
      "•	Designed an E-commerce website using React and Node.js",
      "•	Contributed to the AI chatbot integration for the company’s website",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Solution for 1930 Helpline: Improving Cybercrime Reporting Efficiency",
    description:
      "The proposed solution is an improvement in the web-based platform that integrates the 1930 Helpline with an AI-powered Query Resolution and Tracking System which continuously improve its performance through continuous feedback and improvement system with a data analysis model to predict and analyze cases . The system aims to provide a seamless and user-friendly experience for complainants to report cyber fraud cases, freeze funds, and recover them in a timely manner. The platform also aims to provide legal guidance and fraud prevention tips to the users, as well as insights and recommendations to the helpline operators and authorities.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: cybercrime,
    source_code_link:
      "https://github.com/Pj-develop/RJPOLICE_HACK_1720_HACKSTORMERS_9",
  },
  {
    name: "HIREZ: AI-Enhanced Hiring Platform for Smarter Recruitment",
    description:
      "HIREZ is an AI-driven hiring platform designed to streamline and enhance the recruitment process by leveraging advanced technologies. It automates tasks like resume parsing, candidate ranking, and shortlisting, enabling faster and more objective hiring decisions. Built using JavaScript, RESTful APIs, NoSQL databases, and Azure AI services, the platform offers an intuitive interface for both recruiters and job seekers, providing real-time feedback and progress tracking. Developed by a team of five, HIREZ addresses common recruitment challenges such as inefficiency, bias, and the complexity of finding the right talent, making the hiring process smarter, faster, and more effective.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "purple",
      },
    ],
    image: hirez,
    source_code_link: "https://github.com/Pj-develop/Hirez",
  },
  {
    name: "AI-Driven Solution for Real-Time Deepfake Detection",
    description:
      "Overview Features Requirements Installation Usage Model Details Contributing License Overview With the increasing prevalence of deepfake technology, detecting manipulated media has become critical. This project focuses on developing a reliable, efficient, and scalable AI solution to detect face-swapped deepfake videos by analyzing both visual and audio cues. It provides a confidence score for the detected fakeness, aiming to ensure greater security in digital media.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "shell",
        color: "green-text-gradient",
      },
    ],
    image: deepfake,
    source_code_link:
      "https://github.com/shuklatushar12219829/Deepfake_Detection",
  },
];

export { services, technologies, experiences, testimonials, projects };
