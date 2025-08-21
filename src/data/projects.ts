import nexchat from "@/assets/projectImages/nexchat.png";
import chatApp from "@/assets/projectImages/chatApp.png"; // ✅ make sure you have this image or add one

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
    title: "Multi-Client Private Chat",
    description:
      "Built a C++ multi-threaded socket programming project where multiple clients can connect to a server. Each client communicates privately with the server without seeing other clients' messages.",
    thumbnail: chatApp, // replace with the actual image for your project
    githubLink: "https://github.com/bhaveshchhimwal/multi-client-private-chat",
  },
];

export default projects;
