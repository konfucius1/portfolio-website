import { motion } from 'framer-motion';
import github from '../assets/github-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import instagram from '../assets/instagram-svgrepo-com.svg';
import youtube from '../assets/social-media-icons/youtube-play-svgrepo-com.svg';
import tiktok from '../assets/social-media-icons/tiktok-outline-svgrepo-com.svg';

const LeftBar = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="hidden md:block">
      <motion.div
        id="left"
        className="flex justify-center items-center min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex-none w-24" variants={itemVariants}>
          <motion.a
            href="https://github.com/konfucius1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.img
              src={github}
              alt="GitHub"
              className="p-2 w-11"
              variants={itemVariants}
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/thanakon/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.img
              src={linkedin}
              alt="LinkedIn"
              className="p-2 w-11"
              variants={itemVariants}
            />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/thanakonkimsan/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.img
              src={instagram}
              alt="Instagram"
              className="p-2 w-11"
              variants={itemVariants}
            />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/channel/UCccATyxN0ssiIUZvTu3B4AA"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.img
              src={youtube}
              alt="YouTube"
              className="p-2 w-11"
              variants={itemVariants}
            />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@thanakon_kimsan?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.img
              src={tiktok}
              alt="TikTok"
              className="p-2 w-11"
              variants={itemVariants}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LeftBar;
