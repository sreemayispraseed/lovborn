// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    container: {
      center: true,
      padding: "1rem", // adds default spacing
      screens: {
        xs: "150px",   // 👈 custom starting breakpoint
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        screens: {
          xs: "450px",
          sm: "568px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px",
          "3xl": "1650px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
