/** @type {import('tailwindcss').Config} */
export default {
content: [
'./index.html',
'./src/**/*.{js,ts,jsx,tsx}',
],
theme: {
extend: {
boxShadow: {
glow: '0 0 0 1px rgba(148,163,184,0.14), 0 12px 30px rgba(0,0,0,0.35)',
},
},
},
plugins: [],
}