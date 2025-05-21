import { assets } from "@/assets/assets";
import {
  FaCode,
  FaFacebook,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export const about = [
  {
    id: 1,
    icon: <FaCode className=" w-10 h-10 mt-3" />,
    description:
      " Html, css, javascript, react js, nextjs, react-native, nodejs",
    title: "Language",
  },
  {
    id: 2,
    icon: <FaGraduationCap className=" w-10 h-10 mt-3" />,
    description: "B.sc in computer science",
    title: "Education",
  },
  {
    id: 3,
    icon: <FaPaperPlane className=" w-10 h-10 mt-3" />,
    description: "I have some projects i've worked on",
    title: "Project ",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 text-white md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Neominds",
    des: "At NeoMinds, we nurture creativity, confidence, and future-ready skills through personalized tech education designed for curious kids and teenagers.",
    link: "https://neomind-techbloom.vercel.app/SchoolPage",
    img: assets.backend,
  },
  {
    id: 2,
    title: "Conference-Ticket-Generator ",
    des: "A Conference Ticket Generator, the ticket generator will allow users to fill out a form, perform validations, and generate a ticket.",
    link: "https://conference-ticket-generator-xi-khaki.vercel.app/",
    img: assets.ticket,
  },
  {
    id: 3,
    title: "Business Consultation Bot",
    des: "An AI-powered business consultation chatbot, a fullstack mobile application designed to give intelligent  recommendations for business growth. Built with React-native",
    link: "https://github.com/DevGracies/MyFinalYearProjectChatBot",
    img: assets.chatbot,
  },
  {
    id: 4,
    title: "ProfileCard",
    des: "A minimal and responsive profile card component built with HTML and CSS, showcasing personal information.",
    link: "https://graceadegunleprofilecard.netlify.app/",
    img: assets.card,
  },
  {
    id: 5,
    title: "TeamFusion",
    des: "A task-management web application to enhance productivity, collaboration, and workflow efficiency within teams. Built using MERN-Stack.",
    link: "https://github.com/DevGracies/Task-Manager",
    img: assets.team,
  },

  {
    id: 6,
    title: "E-Commerce Platform",
    des: "A fully functional eCommerce web application built with React.js, featuring product listings, a shopping cart, and secure payment integration.",
    link: "https://github.com/DevGracies/e-commerce",
    img: assets.ecommerce,
  },
  {
    id: 7,
    title: "Encryption & Decryption Application",
    des: "A security-mobile application that encrypts and decrypts sensitive data, ensuring safe communication and information protection.",
    link: "https://github.com/DevGracies/Encryption_Decryption",
    img: assets.encrypt,
  },

  {
    id: 8,
    title: "Soar FinTech Task",
    des: "A Fintech Admin page task that shows my design development expertises.",
    link: "https://soar-amber.vercel.app/",
    img: assets.soar,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "🖥 Frontend Engineer",
    desc: "Built responsive and interactive web applications using React.js, Next.js, TailwindCSS, and Redux.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "📱 Mobile App Developer",
    desc: "Developed cross-platform mobile applications for iOS and Android using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "🗄 Full Stack Developer",
    desc: "Designed and developed scalable backend services using Node.js, Express.js, and MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "🛠 Dev Tools & Workflow",
    desc: "Proficient in Git, Postman, CI/CD pipelines, and API testing.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: <FaLinkedin />,
  },
  {
    id: 2,
    img: <FaTwitter />,
  },
  {
    id: 3,
    img: <FaInstagram />,
  },
  {
    id: 4,
    img: <FaFacebook />,
  },
  {
    id: 5,
    img: <FaWhatsapp />,
  },
];
