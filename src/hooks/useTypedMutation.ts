import { MutationHookOptions, useMutation } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export function useTypedMutation<R, V>(
  query: TypedDocumentNode<R, V>,
  baseOptions?: MutationHookOptions<R, V>
) {
  return useMutation<R, V>(query, baseOptions);
}
