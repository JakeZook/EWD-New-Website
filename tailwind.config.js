module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#AE802E",

					secondary: "#1f2937",

					accent: "#6E2619",

					neutral: "#e5e7eb",

					"base-100": "#111827",

					info: "#fcd34d",

					success: "#166534",

					warning: "#ca8a04",

					error: "#cf284d",
				},
			},
		],
	},
};
