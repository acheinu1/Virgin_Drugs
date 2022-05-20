module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./src/components/*.{js,ts,jsx,tsx}",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Lato"],
      heading: ["PT Serif"],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        black: "#0C0C0E",
        lime: {
          default: "#4F9300",
          50: "#e8fadd",
          100: "#d9f6c6",
          200: "#c6f2aa",
          300: "#b2ee8e",
          400: "#9fe971",
          500: "#4F9300",
          600: "#75bf47",
          700: "#5d9939",
          800: "#46732b",
          900: "#2f4c1c",
          // 100:"#1c2e11",
        },

        white: {
          default: "#ffffff",
          400: "#e6e6e6",
          500: "#ffffff",
          600: "#DEDEDE",
        },

        green: {
          default: "4F9300",
          50: "#D1E6DB",
          100: "#B3D6C4",
          200: "#8DC1A6",
          300: "#67AC88",
          400: "#8ACF00",
          500: "#4F9300",
          600: "#176D40",
          700: "#125733",
          800: "#0E4227",
          900: "#092C1A",
          // 100:"#051A0F",
        },
        springGreen: {},
        brown: {
          default: "#330B22",

          400: "#431F34",
          500: "#330B22",
          600: "#2D0B1E",
        },
        blue: {
          default: "#330B22",

          400: "#00F0FF",
          500: "#096FB6",
        },
      },
    },
  },
  
  
    extend: {
      backgroundImage: {
        'footer-texture': "url('https://i.postimg.cc/x8pR911B/leaf_bg.png')",
      }
    },
  


  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "998px",
          },
          "@screen xl": {
            maxWidth: "1080px",
          },
          "@screen 2xl": {
            maxWidth: "1180px",
          },
        },
      });
    },
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
