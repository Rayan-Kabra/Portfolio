import upFlow from "../assets/img-projects/demo-upflow.png";
import pulse from "../assets/img-projects/pulse.png";
import reggenerate from "../assets/img-projects/reggenerate.png";
import maGestionImmo from "../assets/img-projects/ma-gestion-immo.png";

export const projects = [
  {
    title: "Ma Gestion Immo",
    image: maGestionImmo.src,
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Web Socket",
      "Cron",
      "Rate limiters",
      "Google Auth",
    ],
    demo: "https://ma-gestion-immo.netlify.app/",
    code: "https://github.com/RKcodage/Ma-Gestion-Immo",
  },
  {
    title: "Reggenerate",
    image: reggenerate.src,
    technologies: ["React", "TypeScript", "Next.js", "Tailwind", "Airtable"],
    demo: "https://reggenerate.circulegg.fr/",
    code: "https://github.com/yacinekabegg/reggenerate-next",
  },
  {
    title: "Upflow",
    description: "Short description of project 1.",
    image: upFlow.src,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind",
    ],
    demo: "https://www.upflow.website/",
    code: "https://github.com/RKcodage/Upflow",
  },
  {
    title: "Pulse",
    image: pulse.src,
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://pulse-solution.netlify.app/",
    code: "https://github.com/RKcodage/Pulse---Landing-page",
  },
];
