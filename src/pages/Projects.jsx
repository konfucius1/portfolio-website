import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import ProjectCard from '../components/ProjectCard';
import ShadowPirate from '../assets/projects/shadow-pirate-cover.png';
import FitBeats from '../assets/projects/fitbeats-cover.png';

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
  ];

  return (
    <div className="flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 relative z-1">
      <LeftBar />
      <div className="px-8 sm:px-16 sm:mx-16 md:px-8 md:mx-8 flex flex-col">
        <h2 className="pb-4">Projects</h2>

        <p className="pb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ut quasi dolore eos facere ipsum, explicabo ducimus sequi fuga illo
          vel. Vitae magnam molestiae consequuntur culpa hic reprehenderit minus
          optio?
        </p>

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
      </div>
      <RightBar />
    </div>
  );
};

export default Projects;
