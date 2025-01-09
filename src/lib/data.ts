import ClinicManager from "../../public/images/clinicmanager.png";
import WriteIt from "../../public/images/writeit.png";
import CSSImage from "../../public/images/css.png";
import JavaScriptImage from "../../public/images/javascript-logo.png";
import TypeScriptImage from "../../public/images/typescript.png";
import ReactImage from "../../public/images/react.png";
import NextjsImage from "../../public/images/nextjs.png";
import Nodejs from "../../public/images/nodejs.png";
import Git from "../../public/images/github.png";
import Tailwind from "../../public/images/tailwind.png";
import PrismaImage from "../../public/images/prisma.png";
import Redux from "../../public/images/redux.png";
import Express from "../../public/images/express.png";
import Postgres from "../../public/images/postgresql.png";
import PythonImage from "../../public/images/python.png";
import FramerMotion from "../../public/images/framer.png";
import MongoDB from "/images/mongodb.png";
import HTMLImage from "../../public/images/html.png";


export type TProjectsData = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  githubUrl: string;
  liveUrl: string;
};

export const projectsData: TProjectsData[] = [
  {
    id: 1,
    title: "Clinic manager",
    description: "All in one Solution For clinic management",
    tags: [
      "React",
      "Next.js",
      "PostgresSQL",
      "Tailwind",
      "Prisma",
      "Typescript",
    ],
    imageUrl: "/images/clinicmanager.png",
    githubUrl: "https://github.com/salmansheri/clinic_manager",
    liveUrl: "https://clinic-manager-nu.vercel.app",
  },
  {
    id: 2,
    title: "WriteIt",
    description: "A Website Helpful for Managing Journals",
    tags: [
      "React",
      "TypeScript",
      "Drizzle",
      "Next.js",
      "Tailwind",
      "Clerk Authentication",
    ],
    imageUrl: "/images/writeit.png",
    githubUrl: "https://github.com/salmansheri/Journal-app-by-salman",
    liveUrl: "https://write-it-by-salman.vercel.app",
  },
];

export const skillsData = [
  {
    label: "HTML",
    src: "/images/html.png",
  },
  {
    label: "CSS",
    src: "/images/css.png",
  },
  {
    label: "JavaScript",
    src: "/images/javascript-logo.png",
  },
  {
    label: "TypeScript",
    src: "/images/typescript.png",
  },
  {
    label: "React",
    src: "/images/react.png",
  },
  {
    label: "Next.js",
    src: "/images/nextjs.png",
  },
  {
    label: "Node.js",
    src: "/images/nodejs.png",
  },
  {
    label: "Git",
    src: "/images/github.png",
  },
  {
    label: "Tailwind",
    src: "/images/tailwind.png",
  },
  {
    label: "Prisma",
    src: "/images/prisma.png",
  },
  {
    label: "Redux",
    src: "/images/redux.png",
  },
  {
    label: "Express",
    src: "/images/express.png",
  },
  {
    label: "PostgreSQL",
    src: "/images/postgresql.png",
  },
  {
    label: "Python",
    src: "/images/python.png",
  },
  {
    label: "Framer Motion",
    src: "/images/framer.png",
  },
  {
    label: "MongoDB",
    src: "/images/mongodb.png",
  },
] as const;
