export default function commaSeparatedToArray(text) {
  const array = text
    .split(',')
    .map((string) => string.trim())
    .map((string) => string.slice(0, 1).toUpperCase() + string.slice(1))
    .sort()

  const unique = [...new Set(array)]
  return unique
}
