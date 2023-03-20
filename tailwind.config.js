/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-typewriter")({
      wordsets: {
        identidad: {
          words: [
            "Gatunas",
            "Geeks",
            "Animalunas",
            "Anonimas",
            "Freaks",
            "developers",
          ],
          delay: 1,
        },
        vegetables: {
          words: ["carrot", "celery", "corn", "potato"],
          pauseBetween: 5,
        },
      },
    }),
  ],
};
