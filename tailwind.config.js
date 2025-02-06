const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2563eb',
                secondary: '#14b8a6',
                accent: '#facc15',
                success: '#10b981',
                danger: '#ef4444',
                warning: '#f97316',
                info: '#3b82f6',
                dark: '#111827',
                light: '#f8fafc',
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
            },
            spacing: {
                '0.5': '0.125rem',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '32': '8rem',
                '40': '10rem',
                '48': '12rem',
                '56': '14rem',
                '64': '16rem',
            },
            fontFamily: {
                sans: ['Inter', 'Nunito', 'sans-serif'],
                mono: ['Fira Code', 'Courier New', 'monospace'],
                display: ['Poppins', 'sans-serif'],
            },
            boxShadow: {
                xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
                sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
                md: '0 4px 6px rgba(0, 0, 0, 0.1)',
                lg: '0 10px 15px rgba(0, 0, 0, 0.15)',
                xl: '0 20px 25px rgba(0, 0, 0, 0.2)',
                '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
            },
            transitionProperty: {
                width: 'width',
                height: 'height',
                spacing: 'margin, padding',
            },
            opacity: {
                '5': '0.05',
                '10': '0.1',
                '20': '0.2',
                '30': '0.3',
                '40': '0.4',
                '50': '0.5',
                '60': '0.6',
                '70': '0.7',
                '80': '0.8',
                '90': '0.9',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        plugin(({ addUtilities }) => {
            addUtilities({
                '.text-gradient': {
                    background: 'linear-gradient(to right, #2563eb, #14b8a6)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                },
                '.hover-scale': {
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                },
            });
        }),
    ],
};
