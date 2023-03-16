import { motion } from 'framer-motion';
import image from '../assets/author-image.png';
import Tabs from '../components/Tabs';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';

const About = () => {
  return (
    <motion.div
      className="flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 relative z-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <LeftBar />
      <div className="flex flex-col justify-start items-start">
        <div className="px-4 sm:px-16 sm:mx-16 md:px-8 md:mx-8">
          <h2 className="pb-4 text-center sm:text-left text-off-white">
            About Me
          </h2>

          <motion.div
            className="flex flex-col md:flex-row bg-neutral-700 bg-opacity-20 p-4 h-auto rounded-xl w-fit mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div class=" md:px-4 text-base">
              <p className="py-4 text-off-white">
                Greetings, my name is Charlie and I am passionate about
                bringing my work to fruition. I commenced my studies in 2021
                with a major in Software Engineering and subsequently
                developed my skills in Web Development through self-learning at
                the end of 2022.
              </p>

              <p className="pb-4 text-off-white">
                I am currently in my final year of study at the University of
                Melbourne, where I am also serving as a Software Engineering
                Intern at ANZ Banking Group and the Vice President at Computing and Information Systems Student Association (CISSA).
                My foremost objective is to continually enhance
                my knowledge and skills through active collaboration in diverse
                student-led projects, hackathons, and industry engagements.
              </p>
            </div>

            <div className="avatar relative flex justify-center md:justify-start z-1">
              <div className="w-72 pt-4 sm:pt-0">
                <motion.img
                  src={image}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center items-center pt-8 sm:pt-16 text-off-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-center md:text-left font-bold text-lg mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-col justify-center items-center pb-4">
              <p className="">
                Listed below are some of the recent tech stacks I have
                experience with.
              </p>
            </div>
            <Tabs />
            <p className="italic opacity-50">
              All technology icons are from svg-repo (open-sourced)
            </p>
            <p className="italic opacity-50">Hint: hover over icons</p>
          </motion.div>
        </div>
      </div>

      <RightBar />
    </motion.div>
  );
};
export default About;
