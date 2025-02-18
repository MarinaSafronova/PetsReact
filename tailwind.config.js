/** @type {import('tailwindcss').Config} */
import { gridAreas } from "tailwindcss-grid-areas";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#234683",
                secondary: "#24B2BC",
                "secondary-rgba": " rgba(36, 178, 188, 0.12)",
                accent: "#FFC24F",
                brown: "#635D7E",
                "light-blue": "#F2F9FF",
                "dark-blue": "#EFF6FF",
                success: "#42CE55",
                error: "#FF4F4F",
                green: "#45C199",
                orange: "#FF784F",
                "light-green": "#2FCE74",
                purple: "#5D6FFB",
                "dark-purple": "#56428D",
                dark: "#222D3F",
                "light-purple": "rgba(93, 111, 251, 0.12)",
                "dark-gray": "rgba(107, 132, 177, 0.2)",
                "light-purple-o": "rgba(148, 127, 204, 0.1)"
            },
            fontFamily: {
                sans: ["Poppins", "ui-sans-serif", "system-ui"],
                mons: ["Montserrat", "serif"],
                proxima: ["Proxima"],
                "Cerebri-Regular": ["CerebriPro-Regular", "serif"],
                "Cerebri-Bold": ["CerebriPro-Bold", "serif"],
                "Cerebri-ExtraBold": ["CerebriPro-ExtraBold", "serif"],
                "Cerebri-SemiBold": ["CerebriPro-SemiBold", "serif"],
                "Cerebri-Italic": ["CerebriPro-Italic", "serif"],
                "Cerebri-BoldItalic": ["CerebriPro-BoldItalic", "serif"],
                "Cerebri-ExtraBoldItalic": [
                    "CerebriPro-ExtraBoldItalic",
                    "serif",
                ],
                "Cerebri-SemiBoldItalic": [
                    "CerebriPro-SemiBoldItalic",
                    "serif",
                ],
                "Cerebri-Medium": ["CerebriPro-Medium", "serif"],
                "Cerebri-Heavy": ["CerebriPro-Heavy", "serif"],
                "CeraPro-Bold": ["CeraPro-Bold", "serif"],
                "CeraPro-Black": ["CeraPro-Black", "serif"],
                "nunito": ["Nunito", "serif"],
                "satoshi": ["Satoshi", "serif"],
            },
            fontSize: {
                large: ["3.125rem", { lineHeight: "2.1" }], //50
                "5xl": ["2.813rem", { lineHeight: "1.3" }], //45
                "4xl": ["2.5rem", { lineHeight: "1.5" }], //40
                "2xl": ["1.563rem", { lineHeight: "1.2" }], //25
                xl: ["1.37rem", { lineHeight: "1.2" }], //22 //
                35: ["2.188rem", { lineHeight: "1" }], //35
                32: ["2rem", { lineHeight: "1" }],//32
                m: ["1.875rem", { lineHeight: "1.2" }], //30
                28: ["1.75rem", { lineHeight: "1.2" }], //28
                27: ["1.688rem", { lineHeight: "1.2" }], //27
                26: ["1.625rem", { lineHeight: "1.4" }], //26
                23: ["1.438rem", { lineHeight: "1"}],
                22: ["1.375rem", { lineHeight: "1.2" }], //22
                sm: ["1.25rem", { lineHeight: "1.2" }], //20
                s: ["0.938rem", { lineHeight: "1" }], //15
                14: ["0.875rem", { lineHeight: "1" }],
                13: ["0.813rem", { lineHeight: "1" }], //13
                12: ["0.75rem", { lineHeight: "1" }], //12
                10: ["0.625rem", { lineHeight: "1" }], //11
            },
            content: {
                line: 'url("assets/decor.svg")',
                woman: 'url("assets/woman.svg")',
                "line-2": 'url("assets/decor.svg")',
                "title-before-esa": 'url("assets/esa-before.svg")',
                "title-after-esa": 'url("assets/esa-after.svg")',
            },
            gridTemplateColumns: {
                "2-col": "repeat(2, auto)",
                "4-col": "repeat(4, 200px)",
            },
            gridTemlateArea: {
                layout: {},
            },
            boxShadow: {
                card: "0px 34px 44px -5px rgba(0, 0, 0, 0.06)",
                "choose-card": "0px 34px 44px -5px rgba(0, 0, 0, 0.06)"
            },
            screens: {
                plan: {min: "1145px"},
                mobile: { min: "410px" },
                small: {max: "410px"}
            },
            backgroundImage: {
                "plan": "linear-gradient(270deg, rgba(251, 253, 255, 0.45) 4.4%, #FBFDFF 86.04%);",
            },
            maxWidth: {
                "7xl": "81.25rem",
            }
        },
    },
    plugins: [
        gridAreas({
            footer: {
                base: ["logo logo", "links follow", "contacts seen"],
                lg: ["logo links contacts seen", "logo links follow seen"],
            },
        }),
    ],
};
