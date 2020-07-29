const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/v1/graphql",
    createProxyMiddleware({
      target: "https://sgdq.shaneschulte.com",
      changeOrigin: true,
      ws: true,
    })
  );
};
