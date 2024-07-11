"use client";

import { motion } from "framer-motion";
import Sidebarme from "@/app/compunent/sidebarme";
import Mynav from "@/app/compunent/mynav";
import Socialyak from "@/app/compunent/social/socialyak";
import Socialdw from "@/app/compunent/social/socialdw";
import Socialsee from "@/app/compunent/social/socialsee";

function Page() {
  return (
    <>
      <Sidebarme />

      <Mynav />

      <motion.div
        className="absolute flex-col w-4/5 left-80 gap-3 flex"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl text-gray-700 rounded font-bold"
        >
          Social Media
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-row justify-center gap-2"
        >
          <Socialyak />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col mt-3 gap-4"
          >
            <Socialdw />
            <Socialdw />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <Socialsee />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Page;
