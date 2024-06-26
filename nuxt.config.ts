// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        "@/assets/css/main.css",
    ],
    modules: [
        "@nuxtjs/tailwindcss",
    ],
    tailwindcss: {
        exposeConfig: true,
    },
    app: {
        head: {
            title: 'Antonio Yves - Dev'
        }
    }
})