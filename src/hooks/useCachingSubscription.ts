import {
  BaseSubscriptionOptions,
  DocumentNode,
  useApolloClient,
  useSubscription,
} from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

const makeQueryFromSubscription = (a: DocumentNode) => {
  const b = { ...a };
  b.definitions = a.definitions.map((n, i) => {
    if (i > 0) return n;
    return { ...n, operation: "query" };
  });
  return b;
};

export function useCachingSubscription<R, V>(
  query: TypedDocumentNode<R, V>,
  baseOptions?: BaseSubscriptionOptions<R, V>
) {
  const res = useSubscription<R, V>(query, baseOptions);
  const client = useApolloClient();
  if (res.loading) {
    try {
      const cacheVal = client.cache.read({
        rootId: "ROOT_SUBSCRIPTION",
        optimistic: false,
        variables: baseOptions?.variables,
        query: makeQueryFromSubscription(query),
      });
      // cache hit
      return {
        ...res,
        loading: !cacheVal,
        data: cacheVal as typeof res["data"],
      };
    } catch (e) {
      // cache miss
      return res;
    }
  }
  return res;
}
