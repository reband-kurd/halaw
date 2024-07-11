"use client";

import { motion } from "framer-motion";
import Sidebarme from "@/app/compunent/sidebarme";
import Yakamnaxsha from "@/app/compunent/home/yakamnaxsha";
import Mynav from "@/app/compunent/mynav";

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
        <h1 className="text-5xl text-gray-700 rounded font-bold">Home</h1>
        <Yakamnaxsha />
      </motion.div>
    </>
  );
}

export default Page;
