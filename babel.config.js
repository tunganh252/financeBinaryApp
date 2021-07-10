module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            src: "./src",
            assets: "./src/assets",
            fontAwesome: "./src/assets/icons/fontAwesome",
            components: "./src/components",
            atoms: "./src/components/atoms",
            common: "./src/components/common",
            organisms: "./src/components/organisms",
            templates: "./src/components/templates",
            // constant: "./src/constant/themes",
            constant: "./src/constant",
            services: "./src/services",
            stores: "./src/stores",
          },
        },
      ],
    ],
  };
};
