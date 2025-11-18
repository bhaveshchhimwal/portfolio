import nexchat from "@/assets/projectImages/nexchat.png";
import popin from "@/assets/projectImages/popin.png";
import openpages from "@/assets/projectImages/openpages.png";
import { IProject } from "./types";

const projects: Array<IProject> = [
  {
    title: "NexChat",
    description:
      "Real-time CRUD chat application with integrated AI Assistant. Techstack involved are React, Node.js, Express.js, MongoDB.",
    thumbnail: nexchat,
    githubLink: "https://github.com/bhaveshchhimwal/NexChat",
    demoLink: "https://nexchat44.onrender.com/"
  },
  {
    title: "PopIn",
    description:
      "Event ticketing platform for buying and selling event tickets with secure payments. Techstack involved are React, Node.js, Express.js, MongoDB.",
    thumbnail: popin,
    githubLink: "https://github.com/bhaveshchhimwal/PopIn",
    demoLink: "https://popin-0tgd.onrender.com/"
  },
  {
    title: "OpenPages",
    description:
      "A RESTful Blog API with secure authentication, CRUD operations, and scalable backend architecture. Techstack involved are Node.js, Express.js, MongoDB.",
    thumbnail: openpages,
    githubLink: "https://github.com/bhaveshchhimwal/OpenPages",
    demoLink: "https://documenter.getpostman.com/view/42559507/2sB3WsNJyS"
  },
];

export default projects;
