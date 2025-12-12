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
import work1 from "./public/work-1.png";
import work2 from "./public/work-2.png";
import work3 from "./public/work-3.png";
import work4 from "./public/work-4.png";
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
import profile_img from "./user-image.png";
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
import javascript_icon from "./javascript-icon.png";
import react_icon from "./react-icon.png";
import node_icon from "./node-icon.png";
import typescript_icon from "./typescript-icon.png";
import docker_icon from "./docker-icon.png";
import express_icon from "./express-icon.png";

import git_icon from "./git-icon.png";
import github_icon from "./github-icon.png";
import play_icon from "./play-icon.png";

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
  javascript_icon,
  react_icon,
  node_icon,
  typescript_icon,
  docker_icon,
  express_icon,
  git_icon,
  github_icon,
  play_icon,
};

export const workData = [
  {
    title: "Movie Ticket Booking App",
    description:
      "Developed a show booking app with role base access, along with seat reservation and notification.",
    bgImage: assets.work2,
    github_link: "https://github.com/sanjay-1458/Movie-Ticket-Booking",
    link: "https://quickshow-sigma-lyart.vercel.app/",
    tags: ["React.js", "TypeScript", "Express", "MongoDB"],
  },
  {
    title: "AI Blog App",
    description:
      "Built a full-stack AI-powered blog application , integrated Google Gemini API to generate blog content.",
    bgImage: assets.work1,
    github_link: "https://github.com/sanjay-1458/AI-Blog-Application",
    link: "https://ai-blog-application.vercel.app/",
    tags: ["React.js", "Node.js", "Gemini API", "JWT"],
  },
  {
    title: "Movie Fetcher",
    description:
      "Designed a simple application to fetch latest movie from TMDB API.",
    bgImage: assets.work3,
    github_link: "https://github.com/sanjay-1458/Movie-Application-Appwrite",
    link: "https://movie-application-appwrite.vercel.app/",
    tags: ["React.js", "TMDB"],
  },
  {
    title: "URL Shortner",
    description:
      "Implemented a mechanism to shrink the long URLs and used cache for commonly searched URLs.",
    bgImage: assets.work4,
    github_link: "https://github.com/sanjay-1458/URL-Shortener",
    link: "https://url-shortener-chi-eight.vercel.app/",
    tags: ["Redis", "Base62"],
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "C, C++, JavaScript, TypeScript",
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
    description:
      "Knight on LeetCode with peak rating 1900+; ranked 1033 globally in Bi-Weekly Contest 155.",
    url: "https://leetcode.com/u/st2147/",
  },
];
export const experiences = [
  {
    company: "Autodesk",
    title: "Software Developer Intern",
    logo: assets.autodesk,
    duration: "July 2024 – Dec 2024",
    work: [
      "Refactored the Fusion Home application to simplify code structure and enhance maintainability, resulting in a 15% reduction in code complexity.",
      "Built a script to fetch and manage version across multiple services, helping reduce production deployment time by 30%.",
    ],
  },
];
