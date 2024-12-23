import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        progressBar: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        slideInRight: "slideInRight 0.4s ease-out",
        progressBar: "progressBar 3s linear",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
      colors: {
        // Custom color palette based on your Figma design
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f9f1e7", // Light beige for primary background
        secondary: "#816dfa", // Example for action elements
        accent: "#b88e2f", // Gold accent
        textMain: "#333333", // Dark text color
        textMuted: "#666666", // Muted text
        border: "#e5e7eb", // Light border
      },
      fontFamily: {
        // Custom fonts from Figma
        sans: ["'Inter'", "sans-serif"], // Replace with your Figma font
        heading: ["'Poppins'", "sans-serif"], // Example heading font
      },
      spacing: {
        // Custom spacing to match Figma's paddings and margins
        "4.5": "1.125rem", // Example for 18px
        "7.5": "1.875rem", // Example for 30px
      },
      boxShadow: {
        // Shadows for elevated elements
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        header: "0 2px 4px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        // Match your Figma border radius
        "4xl": "2rem", // Example for larger elements
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
} satisfies Config;
