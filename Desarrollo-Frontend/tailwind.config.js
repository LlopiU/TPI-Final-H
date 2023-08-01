/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image-opacity': "url('/fondo-imagen.png')",
      }),
      backgroundOpacity: {
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
      },
      fontFamily:{
        "playfair-display":['Playfair Display', 'serif']
      },
      backgroundImage:{
        "header":"url('/src/img/fruitsbg.jpg')"
      }
    },
  },
  plugins: [],
}
