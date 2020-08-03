const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/hasura/v1/graphql",
    createProxyMiddleware("/hasura/v1/graphql", {
      target: "https://sgdq.shaneschulte.com",
      changeOrigin: true,
      ws: true,
    })
  );
};
