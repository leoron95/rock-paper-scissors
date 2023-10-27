/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "barlow-semi-condensed": ['"Barlow Semi Condensed"'],
      },
      colors: {
        score: "hsl(229, 64%, 46%)",
        dark: "hsl(229, 25%, 31%)",
        "header-outline": "hsl(217, 16%, 45%)",
        gradient: "hsl(214, 47%, 23%) to hsl(237, 49%, 15%)",
      },
      backgroundImage: {
        pentagon: "url('/images/bg-pentagon.svg')",
        triangle: "url('/images/bg-triangle.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
