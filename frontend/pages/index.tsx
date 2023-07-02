// import Layout from "../components/layout"

import { motion } from "framer-motion";
import Card from "../components/card";
import { slideIn } from "../utils/motion";

export default function IndexPage() {

  return (
    <div className="px-8 py-2 md:px-16 md:py-4">
      <section className="py-20">
        <div className="m-auto max-w-7xl space-y-12">
          <motion.div
            className="space-y-2"
            variants={slideIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-600 md:text-5xl">Prompt Treasure</h4>
            <p className="text-lg text-white">
              100 Prompts for Midjourney
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </div>
  )
}
