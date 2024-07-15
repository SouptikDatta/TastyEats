/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "red": "#FF6868",
        "cream": "#C7A07A",
        "secondary": "#555",
        "greenBG": "#008000",
        "prigmayBG": "#FCFCFC",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        sign: ['Style Script', 'cursive'],
        oleo: [ "Oleo Script", 'system-ui'],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
    },
  },
  plugins: [require("daisyui")],
}

