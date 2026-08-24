import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B71C24",
          dark: "#8F151B",
        },
        ink: "#0F0F10",
        surface: "#FFFFFF",
        "surface-soft": "#FAFAFA",
        neutral: "#4B5563",
      },
      fontFamily: {
        headline: ["var(--font-headline)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        spin_slow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee_left: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee_right: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "spin-slow": "spin_slow 40s linear infinite",
        "marquee-left": "marquee_left 28s linear infinite",
        "marquee-right": "marquee_right 24s linear infinite",
        sway: "sway 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
