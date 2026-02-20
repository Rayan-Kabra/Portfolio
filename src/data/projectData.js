import moviesBank from "../assets/img-projects/mb.png";
import morpionGame from "../assets/img-projects/morpion-game.png";
import brainwave from "../assets/img-projects/brainwave.png";
import clairePanizzolo from "../assets/img-projects/claire-panizzolo.png";
import reggenerate from "../assets/img-projects/reggenerate.png";
import pulse from "../assets/img-projects/pulse.png";
import restApi from "../assets/img-projects/rest-api.png";
import maGestionImmo from "../assets/img-projects/ma-gestion-immo.png";
import upFlow from "../assets/img-projects/demo-upflow.png";

export const projects = [
  {
    title: "Ma Gestion Immo",
    description:
      "Application full-stack de gestion immobilière (SaaS) développée avec React (Vite, Tailwind, Zustand) côté front et Node.js / Express / MongoDB côté back. Gestion des utilisateurs, rôles, baux, documents, invitations par lien magique et messagerie temps réel via Socket.IO.",
    image: maGestionImmo.src,
    technologies: [
      "React",
      "Zustand",
      "Tailwind",
      "Express",
      "MongoDB",
      "JWT",
      "Socket.io",
      "Cron",
      "Nodemailer",
      "Rate limiters",
      "Google Auth",
    ],
    demo: "https://ma-gestion-immo.netlify.app/",
    code: "https://github.com/Rayan-Kabra/Ma-Gestion-Immo",
    category: "fullstack",
  },
  {
    title: "Upflow",
    description:
      "UpFlow est une plateforme moderne de vote de fonctionnalités développée avec Next.js, TypeScript, Node.js et MongoDB pour collecter, prioriser et gérer efficacement les retours utilisateurs. Cliquez sur démo dans la barre de navigation pour tester l'application sous forme de widget intégré.",
    image: upFlow.src,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    demo: "https://www.upflow.website/",
    code: "https://github.com/Rayan-Kabra/Upflow",
    category: "fullstack",
  },
  {
    title: "Reggenerate",
    description:
      "Site web réalisé pour la start-up Circul'Egg, développé avec Next.js et TypeScript. La gestion dynamique du contenu est assurée par liaison avec l'Api de Airtable.",
    image: reggenerate.src,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Airtable API",
      "GitHub Actions",
    ],
    demo: "https://reggenerate.circulegg.fr/",
    code: "https://github.com/yacinekabegg/reggenerate-next",
    category: "frontend",
  },
  {
    title: "Pulse",
    description:
      "Page d'accueil d'un SaaS réalisée avec Next.js, TypeScript et Tailwind.",
    image: pulse.src,
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://pulse-solution.netlify.app/",
    code: "https://github.com/Rayan-Kabra/Pulse---Landing-page",
    category: "frontend",
  },
  {
    title: "CRUD Rest API",
    description:
      "CRUD Rest API développée avec TypeScript,Nest.js, Node.js, PostgreSql et Docker.",
    image: restApi.src,
    technologies: [
      "TypeScript",
      "Node.js",
      "Nest.js",
      "PostgreSql",
      "CRUD",
      "Docker",
    ],
    demo: "",
    code: "https://github.com/Rayan-Kabra/Crud-Rest-Api-Nestjs",
    category: "backend",
  },
  {
    title: "Movies Bank",
    description:
      "Application full-stack dédiée aux cinéphiles, permettant de rechercher des films en temps réel et de sauvegarder ses favoris. Développée avec JavaScript et React, elle s’appuie sur l’API TMDb pour afficher des informations cinématographiques à jour. Les opérations CRUD sont exposées par une API REST développée avec Node.js et Express, tandis que la persistance des données est assurée par MongoDB à l’aide de Mongoose.",
    image: moviesBank.src,
    technologies: [
      "React",
      "JavaScript",
      "Sass",
      "MongoDB",
      "Node.js",
      "Express",
      "Auth",
      "TMDB Api",
    ],
    demo: "https://your-movies-bank-app.netlify.app/",
    code: "https://github.com/Rayan-Kabra/Movies-bank-front",
    category: "fullstack",
  },
  {
    title: "Morpion Game",
    description:
      "Application de jeu de morpion en ligne permettant à deux joueurs de s’affronter en temps réel. L’application est construite avec React, TypeScript et Vite côté front, et Node.js / Express côté back, avec une communication temps réel assurée par Socket.IO.",
    image: morpionGame.src,
    technologies: [
      "React",
      "TypeScript",
      "Vite.js",
      "Node.js",
      "Express",
      "Web Socket",
    ],
    demo: "https://morpion-game-online.netlify.app/",
    code: "https://github.com/Rayan-Kabra/Morpion-front",
    category: "fullstack",
  },
  {
    title: "Brainwave",
    description:
      "Réplique d'un site web professionnel sur le thème de l'IA développée avec TypeScript et Tailwind.",
    image: brainwave.src,
    technologies: ["JavaScript", "React", "Tailwind"],
    demo: "https://brainwave-ai-corp.netlify.app/",
    code: "https://github.com/Rayan-Kabra/BrainAI",
    category: "frontend",
  },
  {
    title: "Claire Panizzolo",
    description:
      "Site web réalisé pour Claire Panizzolo, photographe professionnelle.",
    image: clairePanizzolo.src,
    technologies: ["React", "JavaScript", "SCSS"],
    demo: "https://clairepanizzolo.netlify.app/",
    code: "",
    category: "frontend",
  },
  /*  {
    title: "App-clima",
    description:
      "Application built with React that uses an API to show real-time weather.",
    image:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    technologies: ["React", "contextAPI", "tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/app-clima",
    category: "frontend",
  }, */
  /*  {
    title: "Legal Staff",
    description:
      "Website built with Astro and Tailwind, a marketing funnel for law firms.",
    image: legalWeb.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/legal-staff",
    category: "frontend",
  },
  {
    title: "Medicare",
    description:
      "Website built with Astro and Tailwind, a marketing funnel for social health providers.",
    image: mediCare.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    category: "frontend",
  },
  {
    title: "AstroFit",
    description:
      "Website built with Astro and Tailwind, a marketing funnel for fitness coaching.",
    image: astroFit.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/GymPage.git",
    category: "frontend",
  },
  {
    title: "API REST for Ecommerce",
    description:
      "RESTful API built with Node.js, Express, and MongoDB to manage tasks with CRUD operations, user registration, and JWT login.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/ApiRest-Ecommerce.git",
    category: "backend",
  },
  {
    title: "100 days coding in Js",
    description: "100 projects built with HTML, CSS, and JavaScript.",
    image:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    technologies: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
    category: "frontend",
  },
  {
    title: "PlaniFy",
    description:
      "Web app to organize your projects, built with React + Vite, TypeScript, and Tailwind for styling.",
    image:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
    category: "frontend",
  },
  {
    title: "Verbenas Paisajes",
    description:
      "Static page built with Astro and Tailwind as a challenge for a startup.",
    image: Verbenas.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
    category: "frontend",
  },
  {
    title: "API REST",
    description:
      "RESTful API built with Express and MongoDB to manage tasks with CRUD operations, user registration, and JWT login.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    code: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
    category: "backend",
  }, */
];
