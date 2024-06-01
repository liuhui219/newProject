/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: false,

        timeline: {
            enabled: false,
        },
    },
    devServer: {
        port: 3000,
        host: "0.0.0.0",
    },
    app: {
        rootId: "root-p",
        keepalive: true,
        buildAssetsDir: "/hall/",
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@vueuse/nuxt", "@element-plus/nuxt"],

    i18n: {
        vueI18n: "./locales/index.js",
    },
    css: ["@/assets/Stylesheets/index.scss", "element-plus/dist/index.css"],
});
