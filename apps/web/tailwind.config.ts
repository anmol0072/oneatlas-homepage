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
        brand: {
          primary: "#635BFF",
          primaryHover: "#7A73FF",
          dark: "#0A2540",
          darker: "#1A1F36",
        },
        accent: {
          pink: "#FF5996",
          peach: "#FFB17A",
          teal: "#00D4B1",
          cyan: "#00D4FF",
          yellow: "#F8BC42",
          purpleLight: "#E8E7FF",
          green: "#00A37A",
          blueLight: "#00B8E6",
        },
        foreground: {
          heading: "#0A2540",
          body: "#425466",
          muted: "#697386",
        },
        background: {
          main: "#FAFBFF",
          secondary: "#F6F9FC",
          tertiary: "#EFF3F8",
          white: "#FFFFFF",
        },
        border: {
          light: "#E3E8EE",
          default: "#EDF1F6",
        },
        soft: {
          green: "#E0FBF4",
          orange: "#FFE9DC",
          pink: "#FFE3EE",
          yellow: "#FFF4DE",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #635BFF, #9B6CFB, #FF5996, #FF9173)",
      },
    },
  },
  plugins: [],
};
export default config;
