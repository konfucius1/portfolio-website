import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="bg-dark h-screen pt-14 px-6 sm:px-12 md:px-24 lg:px-72 flex flex-col justify-start items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="pb-8 text-4xl sm:text-6xl"
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
          className="pb-8 text-xl sm:text-2xl font-thin"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          kimsanthanakon@gmail.com
        </motion.h3>
        <motion.button
          className="bg-off-white hover:text-off-white font-satoshi btn text-dark aspect-auto w-48 sm:w-60 h-12 sm:h-14"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Say Hello
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
