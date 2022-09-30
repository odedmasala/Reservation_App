/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        xxl: '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      width: {
        1600: '1600px',
        400: '400px',
        450: '450px',
        210: '210px',
        550: '550px',
        260: '260px',
        650: '650px',
        50 :"50px",
      },
      height: {
        600: '600px',
        280: '280px',
        900: '900px',
        458: '458px',
      },
      top: {
        ' 50%': '50%',
      },
      backgroundColor: {
        primary: '#F1F1F2',
        blur: '#030303',
      },
      colors: {
        primary: 'rgb(22, 24, 35)',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        grayDark: '#273444',
        gray: '#8492a6',
        grayLight: '#d3dce6',
      },
      height: {
        '88vh': '88vh',
      },
      backgroundImage: {
        'blurred-img':
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaaJ7s4lqcBF4IDROVPzrlL5fexcwRmDlnuEYQenWTt1DejFY5kmYDref2a0Hp2eE4aw&usqp=CAU')",
      },
    },
  },
  plugins: [],
}

