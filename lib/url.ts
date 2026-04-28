/**
 * Ensures a URL has a protocol prefix.
 * If the input is empty, returns empty string.
 * If it already starts with http:// or https://, returns as-is.
 * Otherwise, prepends https://
 */
export function ensureProtocol(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}
