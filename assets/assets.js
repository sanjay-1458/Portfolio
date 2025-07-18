import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import autodesk from "./autodesk.png";
import postman from "./postman.png";
import work1 from './public/work-1.png'
import work2 from './public/work-2.png'
import work3 from './public/work-3.png'
import work4 from './public/work-4.png'
import github from "./github.png";
import jenkins from "./jenkins.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  work1,
  work2,
  work3,
  work4,
  github,
  autodesk,
  postman,
  jenkins,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "AI Blog App",
    description: "Generative AI Project",
    bgImage: assets.work1,
    link:"https://github.com/sanjay-1458/AI-Blog-Application"
  },
  {
    title: "Chat App",
    description: "Using Websocket",
    bgImage: assets.work2,
    link:"https://github.com/sanjay-1458/Chat-Application"
  },
  {
    title: "Movie Discovery",
    description: "Web Design",
    bgImage: assets.work3,
    link:"https://github.com/sanjay-1458/Movie-Application-Appwrite"
  },
  {
    title: "URL Shortner",
    description: "Implemented Redis",
    bgImage: assets.work4,
    link:"https://github.com/sanjay-1458/URL-Shortener"
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "C++, JavaScript, HTML5, CSS3, SQL, React.js, Node.js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built projects using MERN stack",
  },
];

export const toolsData = [
  assets.vscode,
  assets.jenkins,
  assets.postman,
  assets.git,
  assets.github,
];

export const profiles = [
  {
    platform: "LeetCode",
    handle: "Knight",
    rating: "Rating: 1906",
    url: "https://leetcode.com/u/st2147/",
    bgColor: "bg-blue-50",
    textColor: "text-yellow-700",
  },
  {
    platform: "Codeforces",
    handle: "Pupil",
    rating: "Rating: 1340",
    url: "https://codeforces.com/profile/sth_2108",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
];
export const experiences = [
  {
    company: "Autodesk",
    title: "Software Developer Intern",
    logo: assets.autodesk,
    duration: "July 2024 – Dec 2024",
    work: [
      "Refactored React.js codebase to improve maintainability and performance; authored 10+ unit tests covering core components.",

      "Developed a version‑sync script to align package versions across four microservice repositories; built & automated CI/CD pipelines in Jenkins to run both unit tests and end‑to‑end Cypress tests.",
    ],
  },
  
];
