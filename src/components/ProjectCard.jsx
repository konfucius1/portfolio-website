import React from 'react';

const ProjectCard = ({
  image,
  name,
  description,
  techStack,
  liveDemo,
  sourceCode,
}) => {
  return (
    <div className="card card-side bg-off-white/5 shadow-xl my-4 sm:flex sm:flex-row sm:items-center sm:justify-between sm:max-h-64">
      <figure
        className="sm:w-96 sm:bg-cover sm:bg-center sm:rounded-tl-xl sm:rounded-bl-xl h-64"
        style={{ backgroundImage: `url(${image})` }}
      ></figure>

      <div className="card-body flex-1">
        <h2 className="card-title text-lg font-medium mb-2 sm:mb-0 sm:mr-4">
          {name}
        </h2>

        <p className="text-gray-600 sm:mb-0 sm:mr-4">{description}</p>

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
            Source Code
          </a>
          {liveDemo ? (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm ml-2"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
