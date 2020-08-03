export type ArrayOf<T extends any[]> = T extends Array<infer U> ? U : never;

export function firstOfArray<T>(arr: T[] | undefined | null): T | undefined {
  if (!arr) return undefined;
  return arr[0];
}
