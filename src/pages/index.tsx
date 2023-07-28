import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NextPageWithLayout } from '@/types';
import { getAppLayout } from '@/components/layouts/AppLayout';

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex h-full w-full items-center justify-center dark:bg-gray-700 dark:text-gray-100">
      <motion.div
        animate={{
          scale: 5,
          rotate: 360,
        }}
        transition={{ ease: 'easeInOut', duration: 3 }}
      >
        <h1 className="font-mono text-6xl font-bold">Hello</h1>
      </motion.div>
    </div>
  );
};
Home.getLayout = getAppLayout;

export default Home;
