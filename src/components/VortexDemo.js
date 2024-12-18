import React from "react";
import { Vortex } from "../components/Vortex.js";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center uppercase">
          Explore the power of AlwaysOn
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 free-trial">
          <button className="border-2 border-white bg-white text-black rounded-lg p-4 freeman-regular uppercase mx-4">
            <span>Get started today</span>
          </button>
        </div>
      </Vortex>
    </div>
  );
}
