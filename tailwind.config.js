/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      'logo':['Dancing Script'],
      'petname':['Poetsen One']
    }
   
  },
  plugins: ["prettier-plugin-tailwindcss"],
}