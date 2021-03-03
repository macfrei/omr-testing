export default function commaSeparatedToArray(text) {
  const sortedArray = text
    .toLowerCase()
    .split(',')
    .map((string) => string.trim())
    .map((string) => string.slice(0, 1).toUpperCase() + string.slice(1))
    .sort()

  const filteredArray = sortedArray.filter((value, index) => {
    return sortedArray.indexOf(value) === index
  })
  return filteredArray
}
