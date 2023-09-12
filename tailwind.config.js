/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{jsx,js,html}'
  ],
  theme: {
    extend: {
      colors: {
        "grey": "#111827",
        "red": "#7F1D1D",
        "orange": "#7C2D12",
        "yellow": "#78350F",
        "green": "#064E3B",
        "teal": "#134E4A",
        "cyan": "#164E63",
        "light-blue": "#0C4A6E",
        "blue": "#1E3A8A",
        "indigo": "#312E81",
        "purple": "#4C1D95",
        "pink": "#831843",
        "rose": "#881337",
      }
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
}

