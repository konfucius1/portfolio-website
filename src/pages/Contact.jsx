import { motion } from 'framer-motion';
import github from '../assets/github-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import instagram from '../assets/instagram-svgrepo-com.svg';
import youtube from '../assets/social-media-icons/youtube-play-svgrepo-com.svg';
import tiktok from '../assets/social-media-icons/tiktok-outline-svgrepo-com.svg';

const MotionButton = motion.button;

const handleSayHelloClick = () => {
  window.location.href = 'mailto:executives@cissa.org.au';
};

const Contact = () => {
  return (
    <motion.div
      className="bg-dark pt-24 px-6 sm:px-12 md:px-24 lg:px-72 flex flex-col justify-start items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="pb-8 text-3xl sm:text-6xl text-off-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Want to get in touch?
      </motion.h2>

      <motion.div
        className="flex flex-col h-auto justify-center items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.h3
          className="pb-8 text-xl sm:text-2xl font-thin text-off-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          executives@cissa.org.au
        </motion.h3>
        <MotionButton
          className="bg-off-white hover:text-off-white font-satoshi btn text-dark aspect-auto w-48 sm:w-60 h-12 sm:h-14"
          onClick={handleSayHelloClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Say Hello
        </MotionButton>
      </motion.div>

      <div className="flex justify-center items-center pt-24">
        <div id="left" className="flex flex-row">
          <a
            href="https://github.com/cissa-unimelb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="p-2 w-11" />
          </a>
          <a
            href="https://www.linkedin.com/company/cissa-unimelb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="p-2 w-11" />
          </a>
          <a
            href="https://www.instagram.com/cissa_unimelb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" className="p-2 w-11" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCyIZqMJHCuu6LGM8yYbyGEw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="YouTube" className="p-2 h-11 w-11" />
          </a>
          <a
            href="https://www.tiktok.com/@cissaunimelb?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktok} alt="TikTok" className="p-2 w-11" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
