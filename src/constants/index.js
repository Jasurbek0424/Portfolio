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
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  forcar,
  foodie,
  apollo,
  oryx,
  rentalcar,
  toounisteel,
  travelgo,
  safemed
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React - Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Web Developer",
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
    title: "React.js Developer",
    company_name: "IT STEP Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - May 2022",
    points: [
      "Conducting lessons and trainings for beginning programmers",
      "Verification and analytics of projects, code review, preparation of technical tasks.",
      "Creating a project architecture and distributing the project according to completion and deadlines",
      "Verification, testing, deployment and technical support",
    ],
  },
  {
    title: "Web Developer",
    company_name: "JuniorCode",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2022 - Dec 2023",
    points: [
      "Familiarization with the technical specifications of the project, creation of a small architecture",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "AIVA GROUP",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
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
    name: "4car",
    description:
      "4car.kz, A company engaged in the sale of tires and wheels for cars, a multi-page site where you can make purchases online, through a bank in installments, There is also a delivery service.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: forcar,
    source_code_link: "https://github.com/Jasurbek0424/4cars.kz-real-project",
  },
  {
    name: "Toounisteel.kz",
    description:
      "A company engaged in the sale and service of metal materials. Also on the website you can order a call with administrators to purchase or order goods.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: toounisteel,
    source_code_link: "https://github.com/Jasurbek0424/UnisteelFront",
  },
  {
    name: "Oryx",
    description:
      "A company engaged in courier service, delivery of goods from the USA, you can also monitor the delivery status of your goods on the website, connect additional services for notification.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: oryx,
    source_code_link: "https://github.com/Jasurbek0424/Oryx.kz",
  },
  {
    name: "SafeMed",
    description:
      "SafeMed, a company that sells various devices for medicine and safety, the company also has distribution to different CIS countries.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: safemed,
    source_code_link: "https://github.com/Jasurbek0424/safemed-real-project",
  },
  {
    name: "RentCar",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.SafeMed, a company that sells various devices for medicine and safety, the company also has distribution to different CIS countries.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: rentalcar,
    source_code_link: "https://github.com/Jasurbek0424/RentalCar",
  },
  {
    name: "TravelGo",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travelgo,
    source_code_link: "https://github.com/Jasurbek0424/Travel-go",
  },
  {
    name: "Foodie",
    description:
      "Foodie, a street food and fine dining restaurant, offers a wide variety of ethnic and delicious dishes of different types and also offers local delivery.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: foodie,
    source_code_link: "https://github.com/Jasurbek0424/food-zone",
  },
  {
    name: "Apello",
    description:
      "Leaders in Software Design & Development. Establishing a technology company takes a strong software team to deliver on what needs to be done.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: apollo,
    source_code_link: "https://github.com/Jasurbek0424/Apollo",
  },
];

export { services, technologies, experiences, testimonials, projects };
