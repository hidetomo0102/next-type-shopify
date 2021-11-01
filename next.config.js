const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  framework: {
    name: "shopify_local",
  },
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
});
