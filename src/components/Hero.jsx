import profilePic from "../assets/KhalidSamim.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
      className="flex flex-wrap lg:flex-nowrap mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-2/3"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          KHALED SAMIM
        </motion.h1>
        <motion.span
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl font-medium text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          Swift & SwiftUI Developer
        </motion.span>
        <motion.p
          className="text-white my-2 max-w-xl py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m a passionate developer who loves building elegant and intuitive applications. 
          Exploring the magic of coding fuels my creativity and problem-solving skills. 
          I’m constantly learning and pushing the boundaries of what’s possible.
        </motion.p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/3 lg:p-8 flex justify-center items-start"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profilePic}
          alt="Khalid Samim"
          className="rounded-2xl shadow-lg w-85 h-85 object-cover mt-10 lg:mt-22 mb-20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
