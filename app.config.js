import "dotenv/config";

export default {
    expo: {
        name: "timer",
        slug: "timer",
        platforms: ["ios", "android", "web"],
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        packagerOpts: {
            config: "metro.config.js",
        },
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff",
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ["**/*"],
        ios: {
            supportsTablet: true,
        },
    },
};