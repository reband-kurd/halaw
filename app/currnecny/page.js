"use client";

import { motion } from "framer-motion";
import Sidebarme from "@/app/compunent/sidebarme";
import Yakambatane from "@/app/compunent/currency/yakambatane";
import Mynav from "@/app/compunent/mynav";
import Curydw from "@/app/compunent/currency/currencydwam";

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
          Currency
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Yakambatane />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Curydw />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Page;
