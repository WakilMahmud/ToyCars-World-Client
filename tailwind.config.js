/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#94c5f7",

					secondary: "#5A95DD",

					success: "#5BD799",

					warning: "#B48913",

					error: "#FC3F31",
				},
			},
		],
	},

	plugins: [require("daisyui")],
};
