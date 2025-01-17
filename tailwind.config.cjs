/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      blue: "0px 0px 4px 4px rgba(59, 171, 207, 0.2), 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
      gray: "0px 1px 10px rgba(0, 0, 0, 0.15), 2px 2px 2px -1px rgba(125, 125, 125, 0.1)",
      contactFormBoxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px ",
      project: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    screens: {
      xsm: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      "2xl": "1440px",
      "3xl": "1990px",
      recentEvents: "542px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "gradient-blue": "linear-gradient(98.63deg, #3B61CF 3.76%, #3BABCF 114.18%)",
        "gradient-blue-reverse":
          "linear-gradient(99.63deg, #a6e2f6 3.76%, #44c9f5 35.76%, #5e83f2 114.18%)",
        "gradient-green": "linear-gradient(98.23deg, #1E7543 -15.4%, #90E6B5 113.98%)",
        "white-line":
          "linear-gradient(90deg, rgba(255,255,255,0) 2%, rgba(255,255,255,0.28335084033613445) 23%, rgba(255,255,255,0.4234068627450981) 48%, rgba(255,255,255,0.5858718487394958) 68%, rgba(255,255,255,0.7987570028011204) 82%);",
        "blue-line":
          "linear-gradient(90deg, rgba(40,111,217,0.8799894957983193) 11%, rgba(40,111,217,0.7819502801120448) 33%, rgba(40,111,217,0.4514180672268907) 55%, rgba(40,111,217,0.31416316526610644) 78%, rgba(40,111,217,0) 97%);",
        "footer-blue-line":
          "linear-gradient(180deg, rgba(40,111,217,0.8799894957983193) 11%, rgba(40,111,217,0.7819502801120448) 33%, rgba(40,111,217,0.4514180672268907) 55%, rgba(40,111,217,0.31416316526610644) 78%, rgba(40,111,217,0) 97%);",
        "gradient-white":
          "linear-gradient(270.21deg, #286FD9 0.18%, rgba(255, 255, 255, 0) 99.84%)",
        "gradientImageHover": "linear-gradient(180.31deg, #D9D9D9 - 43.13 %, rgba(217, 217, 217, 0) 99.73 %)",
      },
      spacing: {
        "hero-height": "254px",
        "hero-width": "224px",
        "event-height": "304px",
        "event-width": "302px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          300: "#1F3A60",
          500: "#1C3255",
          700: "#172B48",
          900: "#152741",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
