/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '340px', 'max': '899px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '900px', 'max': '1824px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      
    },
    extend: {},
  },
   plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

