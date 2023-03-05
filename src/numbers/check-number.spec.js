import { isPositiveNumberGreaterThanZero } from './check-number'

describe('check number', () => {
  it('given postive number returns true', () => {
    const input = 1

    expect(isPositiveNumberGreaterThanZero(input)).toBe(true)
  })

  it('given zero returns true', () => {
    const input = 0

    expect(isPositiveNumberGreaterThanZero(input)).toBe(false)
  })

  it('given negative number returns false', () => {
    const input = -1

    expect(isPositiveNumberGreaterThanZero(input)).toBe(false)
  })

  it('given decimal number returns false', () => {
    const input = 1.2

    expect(isPositiveNumberGreaterThanZero(input)).toBe(false)
  })

  it('given string returns false', () => {
    const input = 'hello'

    expect(isPositiveNumberGreaterThanZero(input)).toBe(false)
  })

  it('given symbols returns false', () => {
    const input = '!@£$'

    expect(isPositiveNumberGreaterThanZero(input)).toBe(false)
  })

  it('given undefined returns false', () => {
    const input = undefined

    expect(isPositiveNumberGreaterThanZero(input)).toBe(false)
  })

  it('given null returns false', () => {
    const input = null

    expect(isPositiveNumberGreaterThanZero(input)).toBe(false)
  })
})
