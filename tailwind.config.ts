import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#d4af37",
          600: "#c8a951",
          700: "#a87c1e",
          800: "#92400e",
          900: "#78350f",
        },
        navy: {
          900: "#030712",
          800: "#050d1f",
          700: "#0a1628",
          600: "#0f1f3d",
          500: "#142952",
        },
      },
      fontFamily: {
        sans:    ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":   "linear-gradient(135deg, #d4af37 0%, #fbbf24 50%, #c8a951 100%)",
        "dark-gradient":   "linear-gradient(180deg, #030712 0%, #050d1f 50%, #030712 100%)",
        "blue-gradient":   "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
      },
      animation: {
        "float":           "float 6s ease-in-out infinite",
        "pulse-gold":      "pulse-gold 3s ease-in-out infinite",
        "gradient-shift":  "gradient-shift 8s ease infinite",
        "border-glow":     "border-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        "border-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.3)" },
          "50%":      { boxShadow: "0 0 40px rgba(212,175,55,0.6), 0 0 60px rgba(212,175,55,0.2)" },
        },
      },
      boxShadow: {
        "gold-sm": "0 0 15px rgba(212,175,55,0.2)",
        "gold-md": "0 0 30px rgba(212,175,55,0.3)",
        "gold-lg": "0 0 60px rgba(212,175,55,0.4)",
        "card":    "0 4px 24px rgba(0,0,0,0.06)",
        "card-lg": "0 8px 40px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
