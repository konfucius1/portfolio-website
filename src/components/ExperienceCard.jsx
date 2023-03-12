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
    <article className="flex flex-col rounded-xl items-center  flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center pb-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden bg-off-white/10 ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain"
        src={image}
        alt=""
      />

      <div className="px-8 md:px-10">
        <h4 className="text-4xl px-4 font-light">{title}</h4>
        <p className="font-bold px-4 text-2xl mt-1">{name}</p>
        <div className="flex space-x-2 my-2 px-4">
          {techStack.map((tech) => (
            <img className="h-10 w-10 rounded-full" src={tech}></img>
          ))}
        </div>
        <p className="uppercase p-5 text-off-white">
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
