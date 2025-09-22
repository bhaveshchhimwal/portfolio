import nexchat from "@/assets/projectImages/nexchat.png";
import popin from "@/assets/projectImages/popin.png";

import { IProject } from "./types";

const projects: Array<IProject> = [
  {
    title: "NexChat",
    description:
      "Developed a real-time chat application with integrated AI Assistant. Techstack involved are React, Node.js, Express.js, MongoDB.",
    thumbnail: nexchat,
    githubLink: "https://github.com/bhaveshchhimwal/NexChat",
  },
  {
    title: "PopIn",
    description:
      "Event ticketing platform with secure QR code entry and fraud prevention.Techstack involved are React, Node.js, Express.js, PostgreSQL.",
    thumbnail: popin,
    githubLink: "https://github.com/bhaveshchhimwal/PopIn",
  },
];

export default projects;
