import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-300 text-center">
      {/* Animated Spinner */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        className="w-20 h-20 border-8 border-t-8 border-gray-300 border-t-secondary rounded-full mb-6"
      ></motion.div>

      {/* Brand or App Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-bold text-gray-800"
      >
        Loading <span className="text-secondary">News Portal</span>...
      </motion.h1>

      {/* Subtext animation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-2 text-sm text-gray-500"
      >
        Please wait a moment
      </motion.p>
    </div>
  );
};

export default Loading;
