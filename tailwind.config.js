/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: "1rem",
            },
            boxShadow: {
                DEFAULT: "0px 0px 17px 0px #ebebed;",
            },
            fontFamily: {
                sans: ["Montserrat", "Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
