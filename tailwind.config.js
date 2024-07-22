/** @type {import('tailwindcss').Config} */
export default {
   content: ["index.html", "src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            openSans: ["Open Sans", "sans-serif"],
         },
         fontWeight: {
            bold: "800"
         }
      },
      plugins: [],
   }
}

