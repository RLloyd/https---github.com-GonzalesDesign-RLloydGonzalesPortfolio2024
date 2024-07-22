
/* Installing Tailwind with Vite

https://tailwindcss.com/docs/guides/vite

Terminal:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Open tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {},
   },
   plugins: [],
 }


Open index.css
@tailwind base;
@tailwind components;
@tailwind utilities;



*/