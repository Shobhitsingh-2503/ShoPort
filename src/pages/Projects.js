import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Quiz from "../images/Quiz.jpg";
import Pixel from "../images/Pixel.jpg";
import Com from "../images/commerce (2).jpg";
import CL from "../images/CL.jpg";
import BMS from "../images/BMS.jpg"


const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Quiz - app",
      imageUrl: Quiz,
      url:"https://github.com/Shobhitsingh-2503/React-quiz-app-25"
    },
    {
      id: 2,
      name: "Pixelator",
      imageUrl: Pixel,
    },
    {
      id: 3,
      name: "Contact List",
      imageUrl: CL,
    },
    {
      id: 4,
      name:"Bank Managemenrt System",
      imageUrl: BMS,
      url:"https://github.com/Shobhitsingh-2503/bank-management-system",
    },
    {
      id: 5,
      name: "E- commerce website",
      imageUrl:Com,
      url:"https://shopcart-ecommerce-site.vercel.app/",
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2><font color="yellow">Projects</font></h2>
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
              <a href={item.url} target="_blank" style={{color:"white"}}>
                <Card.Img src={item.imageUrl}/>
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
