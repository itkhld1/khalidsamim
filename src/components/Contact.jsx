import { CONTACT } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const currentTime = new Date().toLocaleTimeString();
  console.log(currentTime);

  // Ref and InView for animations
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={contactRef}
      className="pb-20 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <motion.h1
        className="my-10 text-center text-white text-6xl font-thin text-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        GET IN TOUCH
      </motion.h1>

      {/* Contact Details */}
      <motion.div
        className="text-center tracking-tighter text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b hover:text-gray-400"
        >
          {CONTACT.email}
        </a>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="text-center mt-10 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p className="footer-time mb-20"> 🕰️ {currentTime} </p>
        <p>
          &copy; ITKHLD <span className="footer-year mb-0">{currentYear}</span>
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default Contact;
