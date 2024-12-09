import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: true });

  return (
    <motion.nav
      ref={navRef}
      className="bg-transparent flex items-center justify-between py-6 mt-10"
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Left Side: Title */}
      <motion.div
        className="flex flex-shrink-0 items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-white text-2xl">ITKHLD&apos;S PORTFOLIO</h1>
      </motion.div>

      {/* Right Side: Social Icons */}
      <motion.div
        className="flex items-center justify-center gap-6 text-1xl text-white"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {/* Add links to the icons */}
        <a
          href="https://www.linkedin.com/in/khaled-samim-6146a7231/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/itkhld1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/itkhld/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
