"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-yellow-400 w-full gap-4 mx-auto px-8 cursor-pointer open-sans-light">
        <Card
          title="CHATBOT"
          info="Turnkey: Works instantly no setup required) Custom: Trained only on your website information) Translation: Communicate in multiple languages) Training: Improvement with every interaction) Multi-Chatbot: District-wide, school site, dept, etc."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-orange-500"
            colors={([153, 51, 255], [0, 255, 85])}
          />
        </Card>
        <button class="text-8xl font-bold text-black">&#43;</button>
        <Card
          title="ANALYTICS"
          info="Usage Metrics: Track the number of unique engagements and overall volume of questions) Question-Level Data: See the exact questions and specific information your community requests) Predictive Insights: Identify information gaps, trends, and anticipate needs to improve the website"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-orange-500"
            colors={([153, 51, 255], [0, 255, 85])}
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
      className="relative border-4 border-black group/canvas-card flex items-center justify-center max-w-[36rem] w-full mx-auto p-4 h-[32rem] hover:shadow-xl transition duration-300 ease-in-out rounded-lg"
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
        <div className="text-center transition duration-200 w-full mx-auto flex items-center justify-center mb-8">
          <h2 className="text-5xl relative z-10 text-black font-bold">
            {title}
          </h2>
        </div>

        {/* Info on Hover */}
        <div
          className={`transition duration-200 w-full mx-auto ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <ul className="list-none list-inside dark:text-white text-black text-2xl text-left space-y-4">
            {infoItems.map((item, index) => {
              const [boldText, rest] = item.split(":");
              return (
                <li key={index}>
                  <span className="font-bold">{boldText}:</span>
                  {rest && ` ${rest}`}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hover Prompt */}
        {!hovered && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg text-gray-900 animate-bounce uppercase font-bold">
            Hover for more details
          </div>
        )}
      </div>
    </div>
  );
};
