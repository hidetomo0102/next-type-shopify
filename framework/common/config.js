const path = require("path");
const merge = require("deepmerge");

const ALlOWED_FW = ["shopify", "bigcommerce", "shopify_local"];
const FALLBACK_FW = "shopify";

const withFrameworkConfig = (defaultConfig = {}) => {
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error(
      "The api framework is missing, please add a valid provider"
    );
  }

  if (!ALlOWED_FW.includes(framework)) {
    throw new Error(
      `The api framework: ${framework} cannot be found, please use one of ${ALlOWED_FW.join(
        ", "
      )}`
    );
  }

  if (framework === "shopify_local") {
    framework = FALLBACK_FW;
  }

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));
  const config = merge(defaultConfig, frameworkNextConfig);

  return config;
};

module.exports = { withFrameworkConfig };
