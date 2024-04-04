/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        merah: "#ed2e64",
        merahmuda: "#eb5f6a",
        kuning: "#ffdb2b",
        hijautua: "#448f82",
        hijaumuda: "#56b480",
        hijaupudar: "#e0e684",
        birutua: "#1378bc",
        birumuda: "#60bae7",
        hitam: "#322c44",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"]
  },
};
