import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Quiz from "../images/Quiz.jpg";
import VoteKaro from "../images/vote.jpg";
import pixel from "../images/Pixel.jpg";
import Com from "../images/commerce (2).jpg";
import CL from "../images/CL.jpg";
import BMS from "../images/BMS.jpg";
import CB from "../images/chatBot.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Quiz - app",
      imageUrl: Quiz,
      url: "https://github.com/Shobhitsingh-2503/React-quiz-app-25",
    },
    {
      id: 2,
      name: "VoteKaro",
      imageUrl: VoteKaro,
      url: "https://github.com/Shobhitsingh-2503/VoteKaro",
    },
    {
      id: 3,
      name: "Bank Managemenrt System",
      imageUrl: BMS,
      url: "https://github.com/Shobhitsingh-2503/bank-management-system",
    },
    {
      id: 4,
      name: "E- commerce website",
      imageUrl: Com,
      url: "https://shopcart-ecommerce-site.vercel.app/",
    },
    {
      id: 5,
      name: "IMGfix",
      imageUrl: pixel,
      url: "https://imgfix.vercel.app/",
    },
    {
      id: 6,
      name: "ShoBlog",
      imageUrl: CL,
      url: "https://shoblog.vercel.app/",
    },
    {
      id: 7,
      name: "Subject expert Chat Bot",
      imageUrl: CB,
      url: "https://mediafiles.botpress.cloud/7996806b-78c2-4e4e-90d7-998dd2861f51/webchat/bot.html",
    },
  ];

  return (
    <motion.div className="projects">
      <h2>
        <font color="yellow">Projects</font>
      </h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <a href={item.url} target="_blank" style={{ color: "white" }}>
                <Card.Img src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </a>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
