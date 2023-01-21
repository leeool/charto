/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      textColor: {
        smoke: "#efefef",
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
      }
    }
  },
  plugins: []
}
