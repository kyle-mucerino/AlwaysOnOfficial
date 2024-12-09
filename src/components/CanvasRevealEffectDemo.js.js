"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8 cursor-pointer">
        <Card
          title="ChatBot"
          info="Turnkey: Works instantly no setup required) Custom: Trained only on your website information) Translation: Communicate in multiple languages) Training: Improvement with every interaction) Multi-Chatbot: District-wide, school site, dept, etc."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249]
            ]}
            dotSize={2}
          />
        </Card>
        <button class="text-8xl font-bold text-white">&#43;</button>
        <Card
          title="Analytics"
          info="Usage Metrics: Track the number of unique engagements and overall volume of questions) Question-Level Data: See the exact questions and specific information your community requests) Predictive Insights: Identify information gaps, trends, and anticipate needs to improve the website"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, info, children }) => {
  const [hovered, setHovered] = React.useState(false);

  // Split the info string into an array
  const infoItems = info.split(")").map((item) => item.trim());

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[30rem] hover:shadow-xl transition duration-300 ease-in-out"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        {/* Title */}
        <div className="text-center transition duration-200 w-full mx-auto flex items-center justify-center mb-4">
          <h2 className="dark:text-white text-5xl relative z-10 text-black font-bold">
            {title}
          </h2>
        </div>

        {/* Info on Hover */}
        <div
          className={`transition duration-200 w-full mx-auto ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <ul className="list-disc list-inside dark:text-white text-black text-md text-left space-y-2 text-xl">
            {infoItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Hover Prompt */}
        {!hovered && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-md text-gray-500 dark:text-gray-400 animate-bounce">
            Hover for more details
          </div>
        )}
      </div>
    </div>
  );
};
