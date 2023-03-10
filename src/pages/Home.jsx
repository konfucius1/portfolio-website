import { motion } from 'framer-motion';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import Hero from '../components/Hero';
import Divider from '../components/Divider';

const Home = () => {
  return (
    <>
      <div className="flex sm:flex bg-dark px-4 pt-8 sm:px-20 sm:pt-24 relative z-1">
        <LeftBar />
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.div>
        <RightBar />
      </div>
      <Divider />
    </>
  );
};

export default Home;
