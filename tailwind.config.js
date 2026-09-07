/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: '#F5F5F0',
                ink: '#0A0A0A',
                charcoal: '#4A4A4A',
                shadow: '#D8D8D0',
                accent: '#39FF14',
                danger: '#FF3333',
            },
            fontFamily: {
                mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
            },
            borderRadius: {
                none: '0px',
                DEFAULT: '0px',
            },
        },
    },
    plugins: [],
}