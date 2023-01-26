/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans serif"]
    },

    extend: {
      textColor: {
        smoke: {
          100: "#efefef",
          200: "#cdcdcd"
        },
        carbon: {
          100: "#555"
        }
      },

      backgroundColor: {
        carbon: {
          100: "#555",
          200: "#444",
          300: "#2f2f2f",
          400: "#2a2a2a"
        },
        smoke: "#efefef"
      },

      borderRadius: {
        primary: "0.5rem",
        secondary: "1.25rem"
      },

      colors: {
        carbon: {
          100: "#555",
          200: "#444",
          300: "#2f2f2f",
          400: "#2a2a2a"
        },
        smoke: {
          100: "#efefef",
          200: "#cdcdcd"
        }
      },

      fontSize: {
        logo: "3rem",
        mainTitle: "2rem",
        subTitle: "1.5rem"
      }
    }
  },
  plugins: []
}
