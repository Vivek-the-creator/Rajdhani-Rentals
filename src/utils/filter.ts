export function normalizedIncludes(value: string, query: string) {
  return value.toLowerCase().includes(query.trim().toLowerCase());
}
