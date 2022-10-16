/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: 'prompt',
        openSans: 'Open Sans'
      },
      colors:{
        'blue-logo-color': '#16929A'
      },
      fontSize: {
        '36px': '36px',
        '20px': '20px',
        '120px': '120px',
        '90px': '90px',
        '18px': '18px',
        '40px': '40px',
        '60px': '60px',
        '22px': '22px',
        '50px': '50px',

      },
      spacing: {
        '24px': '24px',
        '81px': '81px',
        '614px': '614px',
        '114px': '114px',
        '585px': '585px',
        '490px': '490px',
        '390px': '390px',
        '223px': '223px',
      },
      letterSpacing: {

        '0.22': '0.22em',
        '2': '0.025em',
        '3': '0.05em',
        '1.4': '0.14em',
      }
    },
  },
  plugins: [],
}