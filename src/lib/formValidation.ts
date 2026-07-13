// Shared validation rules — safe to import on both client and server.

export const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const RE_PHONE = /^\+?1?\s*[-.]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const RE_ZIP   = /^\d{5}$/;

/** Normalize a U.S. phone to digits-only (10 or 11 with leading 1). */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  return digits.startsWith("1") && digits.length === 11 ? digits.slice(1) : digits;
}

/** Normalize an email address. */
export function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

/** Known bot / test values that should never come from a real prospect. */
const BOT_VALUES = new Set([
  "test", "testing", "tester", "test test", "test1", "test123",
  "admin", "administrator",
  "qwerty", "asdf", "asdfgh", "qwertyuiop",
  "lorem", "lorem ipsum",
  "foo", "bar", "baz", "foobar",
  "user", "user1", "username",
  "name", "firstname", "lastname", "first", "last",
  "john doe", "jane doe", "john smith", "jane smith",
  "aaa", "aaa aaa", "aaaa", "aaaaa",
  "123", "1234", "12345",
  "noreply", "no-reply",
  "xxx", "xxxx",
  "null", "undefined", "none", "na", "n/a",
]);

/** Returns true if the value looks like a bot/test submission. */
export function isBotValue(value: string): boolean {
  const normalized = value.trim().toLowerCase();
  if (BOT_VALUES.has(normalized)) return true;
  // Repeated single character: "aaaaaaa"
  if (/^(.)\1{4,}$/.test(normalized)) return true;
  // Pure numbers in a name field: "12345678"
  if (/^\d+$/.test(normalized)) return true;
  // Keyboard walks: "asdfasdf", "qwerty"
  if (/^(asdf|qwert|zxcv){2,}/.test(normalized)) return true;
  return false;
}
