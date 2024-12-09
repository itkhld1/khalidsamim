import { PROJECTS } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={projectsRef}
      className="pb-4 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Projects Header */}
      <motion.h1
        className="my-10 text-center text-white text-6xl font-thin text-transparent mt-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        PROJECTS
      </motion.h1>

      {/* Projects List */}
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center text-white"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <motion.div
              className="flex-shrink-0 w-full lg:w-1/4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-2xl"
              />
            </motion.div>

            {/* Project Details */}
            <div className="flex-1 w-full lg:w-3/4">
              <motion.h6
                className="mb-2 font-semibold text-white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {project.title}
              </motion.h6>
              <motion.p
                className="mb-4 text-neutral-400"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white-900"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
