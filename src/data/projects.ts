import nexchat from "@/assets/projectImages/nexchat.png";
import popin from "@/assets/projectImages/popin.png";
import { IProject } from "./types";

const projects: Array<IProject> = [
   {
    title: "PopIn",
    description:
      "Event ticketing platform for buying and selling event tickets with secure payments. Techstack involved are React, Node.js, Express.js, PostgreSQL.",
    thumbnail: popin,
    githubLink: "https://github.com/bhaveshchhimwal/PopIn",
    demoLink: "https://popin-0tgd.onrender.com/"
  },
  {
    title: "NexChat",
    description:
      "Real-time CRUD chat application with integrated AI Assistant. Techstack involved are React, Node.js, Express.js, MongoDB.",
    thumbnail: nexchat,
    githubLink: "https://github.com/bhaveshchhimwal/NexChat",
    demoLink: "https://nexchat44.onrender.com/"
  },
 
];

export default projects;
