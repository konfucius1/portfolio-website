import { motion } from 'framer-motion';
import image from '../assets/author-image.jpeg';
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
      <div className="px-8 sm:px-16 sm:mx-16 md:px-8 md:mx-8">
        <h2 className="pb-4 text-center sm:text-left">About Me</h2>

        <motion.div
          className="flex flex-col md:flex-row bg-neutral-700 bg-opacity-20 p-4 h-auto w-fit mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div class="py-4 md:px-4 text-base">
            <p className="pb-4">
              My name is Thanakon and I enjoy building software that comes to
              life! I started university in 2021 majoring in Computing Software
              Systems and have recently self-taught Web Development in the end
              of 2022.
            </p>

            <p className="pb-4">
              Currently, I am in my final year of university at the University
              of Melbourne, a Software Engineering Intern at Suncorp Group, a
              Project Team Lead at Melbourne Space Program. My current priority
              is to learn, build, and gain experiences in aims to become a
              software engineer.
            </p>

            <p>Below are few technologies I have been working with</p>
          </div>

          <div className="avatar relative flex justify-center md:justify-start z-1">
            <div className="w-72 rounded-xl">
              <motion.img
                src={image}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-center md:text-left font-bold text-lg mb-4">
            Technical Skills
          </h3>
          <Tabs />
        </motion.div>
      </div>

      <RightBar />
    </motion.div>
  );
};
export default About;
