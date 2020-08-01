module.exports = {
  schema: [
    {
      "https://sgdq.shaneschulte.com/hasura/v1/graphql": {
        headers: {
          Authorization: "Bearer " + process.env.AUTH_TOKEN,
        },
      },
    },
  ],
  documents: ["./src/queries/*.graphql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {},
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
