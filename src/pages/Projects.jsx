import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import ProjectCard from '../components/ProjectCard';
import ShadowPirate from '../assets/projects/shadow-pirate-cover.png';
import FitBeats from '../assets/projects/fitbeats-cover.png';
import ColorFlipper from '../assets/projects/color-flipper.jpg';
import ProjectCardNI from '../components/ProjectCardNI';
import { motion } from 'framer-motion';

const Projects = () => {
  let projectData = [
    {
      id: 1,
      name: 'Fitbeats',
      description:
        'Utilises the Spotify API to provide users with the ability to generate custom workout playlists based on their preferred music genre, mood, exercise duration and gets you motivated.                     ',
      techStack: ['ReactJS', 'NodeJS', 'TailwindCSS'],
      image: FitBeats,
      sourceCode: 'https://github.com/',
      liveDemo: 'https://netlify.com/',
    },
    {
      id: 2,
      name: 'Shadow Pirate',
      description:
        'Pirate combat game involving projectile rendering and object collision. Built with implementations of object oriented principles. Player controls Sailor, aim is to retrieve stolen crown Jewels from pirates',
      techStack: ['Java', 'Bagel', 'IntelliJ'],
      image: ShadowPirate,
      sourceCode: 'https://github.com/',
    },
    {
      id: 3,
      name: 'Color Flipper',
      description:
        'A color flipper website that generates random colors and displays the corresponding hex code, providing an easy way to find inspiration for color schemes or quickly pick a color.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: ColorFlipper,
      sourceCode: 'https://github.com/',
      liveDemo: 'https://netlify.com/',
    },
  ];

  let otherProjects = [
    {
      id: 1,
      name: 'Point-Region Quadtree',
      description:
        'Urban footpath data processor into dictionary format by implementing a quadtree data structure for point-region and range query analysis.',
      techStack: ['C', 'Valgrind', 'GDB'],
      sourceCode: 'https://github.com/',
      liveDemo: 'https://netlify.com/',
    },
    {
      id: 2,
      name: 'Dictionary Linked List',
      description:
        'Dictionary will allow users to search for footpath records by specific attributes, with the data being read from a file and stored into the linked list.',
      techStack: ['C', 'Valgrind', 'GDB'],
      sourceCode: 'https://github.com/',
    },
    {
      id: 3,
      name: 'RESTful Web App',
      description:
        'A backend application that handles HTTP requests with service functions with an SQL database',
      techStack: ['Spring Boot', 'Kotlin'],
      sourceCode: 'https://github.com/',
      liveDemo: 'https://netlify.com/',
    },
  ];

  return (
    <motion.div
      className="flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 relative z-1"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LeftBar />
      <motion.div
        className="px-8 sm:px-16 sm:mx-16 md:px-8 md:mx-8 flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h2
          className="pb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="pb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          This section showcase some of the work I've built. Feel free to
          contact me for any questions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              sourceCode={project.sourceCode}
              liveDemo={project.liveDemo}
            />
          ))}
        </motion.div>

        <motion.p
          className="pt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Some more of my previous projects
        </motion.p>

        <motion.div
          className="sm:grid sm:grid-cols-3 sm:gap-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {otherProjects.map((project) => (
            <ProjectCardNI
              key={project.id}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              sourceCode={project.sourceCode}
              liveDemo={project.liveDemo}
            />
          ))}
        </motion.div>
      </motion.div>
      <RightBar />
    </motion.div>
  );
};

export default Projects;
