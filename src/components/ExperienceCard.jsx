import React from 'react';
import { motion } from 'framer-motion';

// TODO: Mention icons8 for tech stack logos and Company logos
const ExperienceCard = ({
  name,
  title,
  techStack,
  image,
  start,
  end,
  desc,
}) => {
  return (
    <article className="flex flex-col rounded-xl items-center flex-shrink-0 w-full sm:w-[400px] md:w-[600px] xl:w-[900px] snap-center pb-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden bg-off-white/10 ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 sm:w-32 sm:h-32 xl:w-[200px] xl:h-[200px] rounded-full object-contain"
        src={image}
        alt=""
      />

      <div className="px-4 md:px-10">
        <h4 className="text-2xl sm:text-4xl font-light">{title}</h4>
        <p className="font-bold text-lg sm:text-2xl mt-1">{name}</p>
        <div className="flex space-x-2 my-2">
          {techStack.map((tech) => (
            <img
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
              src={tech}
            ></img>
          ))}
        </div>
        <p className="uppercase p-2 sm:p-5 text-off-white text-sm sm:text-base">
          {start}-{end}
        </p>
        <ul className="list-disc list-inside space-y-4 ml-5 text-base sm:text-lg">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
