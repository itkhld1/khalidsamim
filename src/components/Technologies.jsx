import { SiSwift } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Technologies() {
  const techRef = useRef(null);
  const isInView = useInView(techRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={techRef}
      className="pb-24 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <motion.h1
        className="my-20 text-center font-medium text-4xl text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <span className="text-white text-6xl font-thin text-transparent">
          TECHNOLOGIES I USE
        </span>
      </motion.h1>

      {/* Icons Section */}
      <div className="flex flex-wrap items-center justify-center gap-20">
        {/* Swift Icon */}
        <motion.div
          className="rounded-3xl shadow-lg bg-gradient-to-t from-orange-600 to-yellow-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
        >
          <SiSwift className="text-5xl text-white" />
        </motion.div>

        {/* MySQL Icon */}
        <motion.div
          className="p-1 rounded-lg border border-neutral-800 shadow-lg bg-gradient-to-t from-blue-900 to-blue-900"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
        >
          <SiMysql className="text-5xl text-white" />
        </motion.div>

        {/* Python Icon */}
        <motion.div
          className="p-1 rounded-lg border border-neutral-800 shadow-lg bg-gradient-to-t from-blue-500 to-teal-500"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <SiPython className="text-5xl text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Technologies;

