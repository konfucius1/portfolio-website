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
    <article className="font-rubik flex flex-col rounded-xl items-center flex-shrink-0 w-full sm:w-[400px] md:w-[600px] xl:w-[900px] snap-center  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden bg-off-white/10 px-4 pb-10 pt-10">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 sm:w-32 sm:h-32 xl:w-[200px] xl:h-[200px] rounded-full object-contain hidden sm:block"
        src={image}
        alt=""
      />

      <div className="px-2 smd:px-10">
        <p className="px-2 font-semibold text-sm sm:text-2xl mt-1">{name}</p>
        <h4 className="px-2 text-base sm:text-2xl font-light">{title}</h4>
        <div className="flex space-x-2 my-2 px-2">
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
        <ul className="list-disc list-inside space-y-4 ml-5 text-sm sm:text-base">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-xs text-off-white/40 pt-8 px-4 text-center">
          Logo displayed is the property of their respective owners (icons from
          svg-repo).
        </p>
        <p className=" text-xs text-off-white/40 px-4 text-center">
          Hint: Swipe with track pad or keyboard arrows.
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard;
