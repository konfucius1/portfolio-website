import React from 'react';

const ProjectCardNI = ({
  name,
  description,
  techStack,
  liveDemo,
  sourceCode,
}) => {
  return (
    <div className="card w-66 max-h-80  bg-off-white/10  shadow-xl">
      <div className="card-body ">
        <h2 className="card-title text-base font-medium">{name}</h2>
        <p className="text-sm">{description}</p>

        <div className="flex flex-wrap justify-start mt-2 sm:mt-0">
          {techStack.map((tech) => (
            <button
              key={tech}
              className="btn btn-outline btn-xs mr-2 mb-2 sm:mb-0"
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="card-actions justify-start">
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardNI;
