import React from "react";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import { motion, AnimatePresence } from "framer-motion";

const ExistingComponent = () => {
  return (
    <div className="main-container">
      {/* New Hover Effect Section */}
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <CardWithEffect
          defaultTitle="Card 1"
          hoverTitle="Card 1 Hovered"
          colors={[
            [236, 72, 153],
            [232, 121, 249]
          ]}
        />
        <CardWithEffect
          defaultTitle="Card 2"
          hoverTitle="Card 2 Hovered"
          colors={[[125, 211, 252]]}
        />
        <CardWithEffect
          defaultTitle="Card 3"
          hoverTitle="Card 3 Hovered"
          colors={[[34, 197, 94]]}
        />
      </div>
    </div>
  );
};

const CardWithEffect = ({ defaultTitle, hoverTitle, colors }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      {/* Hover Effect Layer */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 z-10 flex items-center justify-center"
          >
            <CanvasRevealEffect colors={colors} containerClassName="bg-black" />
            {/* Title visible during hover */}
            <h2 className="absolute text-white font-bold text-2xl z-20">
              {hoverTitle}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static Title for Before Hover */}
      {!hovered && (
        <h2 className="absolute text-black dark:text-white font-bold text-xl z-10">
          {defaultTitle}
        </h2>
      )}
    </div>
  );
};



export default ExistingComponent;
