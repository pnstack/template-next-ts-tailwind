'use client';

import { motion } from 'framer-motion';

import AppLayout from '@/components/layouts/AppLayout';

export default function Home() {
  return (
    <AppLayout>
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
    </AppLayout>
  );
}