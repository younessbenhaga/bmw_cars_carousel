import React from "react";
import { motion } from "framer-motion";
import car22 from "./Store/car1.webp";

function Baba1(props) {
  return (
    <motion.div className="mt-96 mb-24">
      <motion.div
        className="w-40 h-20 rounded-full"
        initial={{ rotate: 200 }}
        whileInView={{ rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={car22} alt="" />
      </motion.div>
    </motion.div>
  );
}

export default Baba1;
