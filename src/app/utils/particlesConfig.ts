// src/utils/particlesConfig.ts
import { ParticlesConfig } from "../types/particles";

export const particlesConfig: ParticlesConfig = {
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