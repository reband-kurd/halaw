"use client";

import { motion } from "framer-motion";
import Sidebarme from "@/app/compunent/sidebarme";
import Crypyak from "@/app/compunent/Crypto/crypyak";
import Mynav from "@/app/compunent/mynav";
import Crydww from "@/app/compunent/Crypto/crydww";

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
          Crypto
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Crypyak />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Crydww />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Page;
