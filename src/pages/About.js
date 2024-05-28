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
              I am Shobhit Singh, and I am a pre-final year student at IIT(ISM)
              Dhanbad pursuing Bachelor of Technology in Mining Engineering
            </p>
            <p>
              I am a passionate blockchain developer with a strong foundation in
              building smart contracts using Solidity. My expertise includes
              creating ERC20 and ERC721 tokens, showcasing my ability to develop
              both fungible and non-fungible tokens. I am proficient in using
              Hardhat for testing and deploying smart contracts, and I am
              well-versed in Ethereum's powerful libraries, such as Ethers.js
              and Web3.js.
            </p>
            <p>
              In addition to my blockchain development skills, I excel in
              front-end development, with extensive experience in React.js. My
              deep knowledge of JavaScript and its various libraries allows me
              to create seamless and interactive web applications that
              complement the blockchain back-end. Moreover, I am well-equipped
              in competitive programming using C++. I have solved over 600
              problems across various coding platforms, including LeetCode,
              Codeforces, HackerRank (5-star coder in problem-solving),
              GeeksforGeeks, and many more. This experience has honed my
              problem-solving abilities and strengthened my coding skills,
              enabling me to tackle complex challenges efficiently.
            </p>
            <p>
              Beyond coding, I have a keen interest in photography, which
              inspires me to blend creativity with technology in my projects. My
              photography hobby fuels my innovative mindset, helping me to see
              the world from different perspectives and bring a unique touch to
              my development work. Combining my technical skills with my
              creative pursuits, I strive to build cutting-edge, user-friendly
              blockchain solutions that make a real impact.
            </p>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
