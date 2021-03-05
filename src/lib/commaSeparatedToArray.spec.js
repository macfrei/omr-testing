import commaSeparatedToArray from './commaSeparatedToArray'

describe('commaSeparatedToArray', () => {
  it('returns ["a", "b"] for text "a,b"', () => {
    const result = commaSeparatedToArray('a,b')

    expect(result).toEqual(['A', 'B'])
  })

  it('returns ["a", "b"] for text "  a , b   "', () => {
    const result = commaSeparatedToArray('  a , b   ')

    expect(result).toEqual(['A', 'B'])
  })

  it('returns ["a b", "c"] for text "a b, c"', () => {
    const result = commaSeparatedToArray('a b, c')

    expect(result).toEqual(['A b', 'C'])
  })

  it('returns ["Jane", "John", "Joe"] for text "Jane, John,Joe"', () => {
    const result = commaSeparatedToArray('Jane, John, Joe')

    expect(result).toEqual(['Jane', 'Joe', 'John'])
  })

  it('returns the array in ascending alphabetical order', () => {
    const result = commaSeparatedToArray('Harry, Ginny, Hermione')

    expect(result).toEqual(['Ginny', 'Harry', 'Hermione'])
  })

  it('contains each string only once in the resulting array', () => {
    const result = commaSeparatedToArray('Harry, Harry, Ginny, Hermione')

    expect(result).toEqual(['Ginny', 'Harry', 'Hermione'])
  })

  it('returns all items in title case ("john" -> "John")', () => {
    const result = commaSeparatedToArray('harry, harry, ginny, hermione')

    expect(result).toEqual(['Ginny', 'Harry', 'Hermione'])
  })
})
