import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
              I am Shobhit Singh, and I am a pre-final year student at IIT(ISM) Dhanbad pursuing Bachelor of Technology in Mining Engineering
            </p>
            <p>
            I am passionate about front-end web development and competitive programming. I have knowledge and experience in HTML, CSS, JavaScript, Bootstrap, Semantic UI, React.Js, and SQL. I have solved over 500+ problems on various coding platforms such as Leetcode, GFG, HackerRank, Codeforces, and Codechef. I am a 5-star programmer in problem-solving on HackerRank.
            </p>
            <p>
            In addition to my technical skills, I also has a love for photography.
            </p>
            <p>
            I enjoy capturing moments and creating memories through their camera lens. My love for photography has helped me develop a unique perspective and an eye for detail, which I bring to my work in web development.
            </p>
            <p>
            In the dynamic intersection of technology and creativity, I find a harmonious balance. The love for front-end development, competitive programming, and photography intertwines, creating a unique and multifaceted skill set. With each line of code and every captured image, I continue to explore, learn, and leave an indelible mark on the ever-evolving landscape of technology and art.
            </p>
            
          </article>
        </>
      </div>
    </>
  );
};

export default About;
