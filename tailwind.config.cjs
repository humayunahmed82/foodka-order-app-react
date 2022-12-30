/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "0",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1400px",
        },
        extend: {
            container: {
                center: true,
                padding: "15px",
            },
            fontFamily: {
                barlow: ["'Barlow', sans-serif;"],
            },
            colors: {
                primary: "#8a2b06",
                secondary: "#4d1601",
                hover: "#2c0d00",
                badge: "#b94517",
                badge_hover: "#92320c",
                bg_color: "#383838",
                price: "#ad5502",
            },

            animation: {
                meals: "meals_appear 1s ease-out forwards",
            },

            keyframes: {
                meals_appear: {
                    from: {
                        opacity: 0,
                        transform: "translateY(3rem)",
                    },
                    to: {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                },
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    "@screen xs": {
                        maxWidth: "100%",
                    },
                    "@screen sm": {
                        maxWidth: "540px",
                    },
                    "@screen md": {
                        maxWidth: "720px",
                    },
                    "@screen lg": {
                        maxWidth: "960px",
                    },
                    "@screen xl": {
                        maxWidth: "1200px",
                    },
                },
            });
        },
    ],
};
