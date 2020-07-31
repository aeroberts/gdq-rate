import { useQuery, BaseQueryOptions } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export function useTypedQuery<R, V>(
  query: TypedDocumentNode<R, V>,
  baseOptions?: BaseQueryOptions<V>
) {
  return useQuery<R, V>(query, baseOptions);
}
