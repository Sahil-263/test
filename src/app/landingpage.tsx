"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import "./globals.css";
import { useNavigate } from "react-router-dom";
import { FlipWords } from "../components/ui/flip-words";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";


export default function AuroraBackgroundDemo() {
  const navigate = useNavigate();
  
  const words = ["Playlist", "Vibe", "Beat", "Moment"];

  const handleButtonClick = () => {
    navigate("./home"); // Corrected path
    
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-6xl mx-auto font-bold text-slate-50 dark:text-slate-50">
          <span>Your </span>
          <FlipWords words={words} />
        </div>
        <br />
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-black text-white dark:text-white flex items-center"
          onClick={handleButtonClick}
        >
          <span>Join the Beat</span>
        </HoverBorderGradient>
      </motion.div>
    </AuroraBackground>
  );
}
