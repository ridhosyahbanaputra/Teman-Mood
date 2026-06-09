/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neo-bg': 'var(--background-color)',
                'neo-surface': 'var(--on-background-color)',
                'neo-text': 'var(--on-surface)',
                'neo-border': 'var(--border-color)',
                'neo-green': 'var(--neo-green)',
                'neo-yellow': 'var(--neo-yellow)',
                'neo-red': 'var(--neo-red)',
                'neo-pink': 'var(--neo-pink)',
                'neo-cyan': 'var(--neo-cyan)',
            },
            fontFamily: {
                body: ['Inter', 'sans-serif'],
                title: ['Space Grotesk', 'sans-serif'],
            },
            boxShadow: {
                'neo': '8px 8px 0px 0px var(--border-color)',
                'neo-hover': '1px 1px 0px 0px var(--border-color)',
                'neo-sm': '4px 4px 0px 0px var(--border-color)',
            },
            borderWidth: {
                '3': '3px',
            }
        },
    },
    plugins: [],
}