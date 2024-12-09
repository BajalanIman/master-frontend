const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://logstar-online.de",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // This removes /api from the request path
      },
    })
  );
};
