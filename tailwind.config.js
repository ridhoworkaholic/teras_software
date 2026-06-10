/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1E5BFF',
                    dark: '#1544CC',
                },
                background: '#FFFFFF',
                surface: '#F6F8FB',
                text: {
                    DEFAULT: '#0B1220',
                    secondary: '#4B5563',
                },
                border: '#E5E7EB',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '6px',
                lg: '8px',
            },
            spacing: {
                18: '4.5rem',
                22: '5.5rem',
            },
        },
    },
    plugins: [],
};
