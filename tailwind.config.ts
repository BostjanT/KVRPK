import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '1020px',
                xl: '1440px',
            },
            colors: {
                lightBlue: '#4392F1',
                darkGrey: '#0A2239',
                white: '#E3EBFF',
                whiter: '#fff',
                dark: '#0E0E0C',
                alertOrange: '#FF1900',
                shadows:'#174d80'
            },
            fontFamily: {
                sans: ['Raleway', 'sans-serif'],
            },
            backgroundImage: {},
        },
    },
    plugins: [],
}
export default config
