// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                }
            }
        }
    },
    app: {
        head: {
            title: 'DEVIOO Portal',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { charset: 'utf-8' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'http://devioo.alwaysdata.net/Logo/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,900;1,400&family=Roboto:ital,wght@0,400;0,700;0,900;1,400&display=swap' }
            ],
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
})
