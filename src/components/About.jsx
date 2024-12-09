import aboutMePic from "../assets/KhalidSamim1.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={aboutRef}
      className="pb-4 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {/* About Me Header */}
      <motion.h1
        className="my-20 text-center font-medium text-4xl text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <span className="text-white text-6xl font-thin text-transparent mt-20">
          ABOUT ME
        </span>
      </motion.h1>

      {/* Content Section */}
      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center">
            <motion.img
              className="rounded-2xl shadow-lg w-96 h-96 object-cover"
              src={aboutMePic}
              alt="About Me"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center lg:justify-start text-white">
            <motion.p
              className="my-2 max-w-xl py-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hello, and welcome! I am <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Ahmad Khaled Samim</strong>, a passionate developer with a strong enthusiasm for creating intuitive and engaging digital experiences. I specialize in working with <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Swift</strong> and <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">SwiftUI</strong>, and I have developed several applications that you can explore on my GitHub page or in the Projects section below. Currently, I am pursuing a degree in <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Computer Engineering</strong> at <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Pamukkale University</strong>. I enjoy designing and building responsive, user-centric applications using modern technologies, thriving on challenges, and continuously learning to stay at the forefront of the tech industry.
            <br /><br />
            In addition to my technical expertise, I bring a diverse professional background:
            <br />
            - <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Translator & Secretary</strong> at <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Mahum Domestic and Foreign Trade Company</strong>
            <br />
            - <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Bartender</strong> at <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Mavruka Hotel</strong>, Fethiye, Turkey
            <br />
            - <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Receptionist</strong> at <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">ODETTE Hotel</strong>, Bodrum, Turkey
            <br /><br />
            I am proficient in <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">English</strong>, <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Turkish</strong>, and <strong className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-1xl font-medium text-transparent">Persian</strong>, enabling me to communicate effectively and work in multilingual environments.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
