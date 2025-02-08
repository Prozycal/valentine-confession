/** eslint-disable */
// src/app/page.tsx
"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const HomePage = () => {
  const [message, setMessage] = useState("Would you be my valentine?");
  const [image, setImage] = useState("/main.jpg");
  const [noClickCount, setNoClickCount] = useState(0);
  const [showButtons, setShowButtons] = useState(true);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 100) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

const handleYesClick = () => {
  setMessage("Yay! I'm so happy!");
  setImage("/yes.jpg");
  setShowButtons(false);

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  } as import("canvas-confetti").Options);
};


  const handleNoClick = () => {
    if (noClickCount === 0) {
      setMessage("You're joking, right?");
      setImage("/no-1.jpg");
    } else if (noClickCount === 1) {
      setMessage("Ehh, I'm sure you love me!?");
      setImage("/no-2.jpg");
    } else if (noClickCount === 2) {
      setMessage("Please say yes!");
      setImage("/no-3.jpg");
    } else if (noClickCount >= 3) {
      setMessage("😔");
      setImage("/no-4.jpg");
    }
    setNoClickCount(noClickCount + 1);
  };

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 800 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 5 } },
      move: { enable: true, speed: 1, outModes: { default: "bounce" } },
    },
    detectRetina: true,
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-pink-300 p-6 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={image}
            src={image}
            alt="surprise"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 object-cover rounded-xl shadow-2xl mb-8"
          />
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.h1
            key={message}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-white mb-6 text-center"
          >
            {message}
          </motion.h1>
        </AnimatePresence>

        <div className="flex items-center justify-center space-x-4 relative w-full max-w-xs">
          {showButtons ? (
            <>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,197,94)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesClick}
                className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold transition duration-300"
              >
                Yes
              </motion.button>

              {noClickCount < 4 ? (
                <motion.div
                  animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(239,68,68)" }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={handleNoHover}
                    onClick={handleNoClick}
                    className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold transition duration-300"
                  >
                    No
                  </motion.button>
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,197,94)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYesClick}
                  className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold transition duration-300"
                >
                  Yes
                </motion.button>
              )}
            </>
          ) : (
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,197,94)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6281215219801?text=hai" // Change this to your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold transition duration-300"
            >
              Chat me 👀
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
