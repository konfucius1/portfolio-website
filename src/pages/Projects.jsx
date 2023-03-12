import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import ProjectCard from '../components/ProjectCard';
import ShadowPirate from '../assets/projects/shadow-pirate-cover.png';
import FitBeats from '../assets/projects/fitbeats-cover.png';
import ColorFlipper from '../assets/projects/color-flipper.jpg';
import ProjectCardNI from '../components/ProjectCardNI';

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
    <div className="flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 relative z-1">
      <LeftBar />
      <div className="px-8 sm:px-16 sm:mx-16 md:px-8 md:mx-8 flex flex-col">
        <h2 className="pb-4">Projects</h2>

        <p className="pb-4">
          This section showcase some of the work I've built. Feel free to
          contact me for any questions.
        </p>

        <p></p>

        <div>
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
        </div>

        <p className="pt-8">Some more of my previous projects</p>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 flex flex-col gap-4">
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
        </div>
      </div>
      <RightBar />
    </div>
  );
};

export default Projects;
