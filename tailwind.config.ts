export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                'raisinBlack': '#222323',
                'darkCharcoal': '#313131',

                'brilliantAzure': '#42a7ff',
                'caribbeanGreen': '#00c58e',
                'dazzleRose': '#fe41c9',
                'indigo': '#9640ff',
            },
            fontFamily: {
                'sans': ['Poppins', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
            }
        }
    },
    plugins: []
}