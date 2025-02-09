// src/types/particles.ts
import type { ISourceOptions } from "tsparticles-engine";

export interface ParticlesConfig extends ISourceOptions {
  background: {
    color: {
      value: string;
    };
  };
  fpsLimit: number;
  interactivity: {
    events: {
      onClick: {
        enable: boolean;
        mode: string;
      };
      onHover: {
        enable: boolean;
        mode: string;
      };
    };
    modes: {
      push: {
        quantity: number;
      };
      repulse: {
        distance: number;
        duration: number;
      };
    };
  };
  particles: {
    number: {
      value: number;
      density: {
        enable: boolean;
        area: number;
      };
    };
    color: {
      value: string;
    };
    shape: {
      type: string;
    };
    opacity: {
      value: number;
    };
    size: {
      value: {
        min: number;
        max: number;
      };
    };
    move: {
      enable: boolean;
      speed: number;
      outModes: {
        default: "bounce";
      };
    };
  };
  detectRetina: boolean;
}