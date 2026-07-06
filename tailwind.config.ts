import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0C10",
          900: "#0A0C10",
          800: "#0D1016",
        },
        surface: {
          DEFAULT: "#12151C",
          raised: "#171B24",
        },
        border: {
          DEFAULT: "#232833",
          soft: "#1A1E27",
        },
        text: {
          hi: "#EAEDF3",
          mid: "#9BA3B4",
          low: "#5E6675",
        },
        signal: {
          DEFAULT: "#4FD1C5",
          dim: "#3AA89E",
        },
        request: {
          DEFAULT: "#FF8A4C",
          dim: "#CC6E3C",
        },
        rag: {
          DEFAULT: "#8B7CF6",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #1A1E27 1px, transparent 1px), linear-gradient(to bottom, #1A1E27 1px, transparent 1px)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
