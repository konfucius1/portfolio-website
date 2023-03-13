import React from 'react';
import { motion } from 'framer-motion';

const RightBar = () => {
  return (
    <div className="hidden md:block">
      <motion.div
        id="right"
        className="flex justify-center items-center min-h-screen"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-none w-24">
          <p className="font-satoshi text-off-white origin-right rotate-90">
            kimsanthanakon@gmail.com
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RightBar;
