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
    className: "lg:col-span-3 md:col-span-6 text-white md:row-span-4 lg:min-h-[60vh]",
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
    title: "ProfileCard",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    // img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "TaskFlow ",
    des: " A task management web app (React, Node.js, MongoDB)",
    // img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "SwiftShop ",
    des: "An eCommerce platform (reactjs)",
    // img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    // img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    // img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
  {
    id: 6,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    // img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "🖥 Frontend Engineer",
    desc: "Development of a web-based platform using React.js, Next.js, TailwindCSS, Redux, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "📱 Mobile App Developer",
    desc: "Developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "🗄 Backend Frontend Developer",
    desc: "Node.js, Express.js, MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "🛠 Tools",
    desc: "Git, Postman",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 5,
    title: "🚀 Soft Skills",
    desc: " Problem-solving, Leadership, Public Speaking",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
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
