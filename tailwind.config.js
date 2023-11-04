module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   Back: "url(./bg-explosion.png)",
      //   site: "url(./site-bg.png)",
      // },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-box-shadow": {
          "box-shadow":
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
