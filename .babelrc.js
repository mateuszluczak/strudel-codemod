module.exports = (api) => {
    api.cache(true);

    return {
        presets: ["@babel/preset-env"],
        plugins: [
            [
                "@babel/plugin-proposal-decorators",
                { legacy: true }
            ]
        ]
    }
}
  