import { getNumbers } from './generate-numbers'

describe('generate numbers', () => {
  it('generates array of numbers of given amount', () => {
    const amount = 10
    const array = getNumbers(amount)

    expect(array.length).toBe(amount)
  })

  it('gives array of numbers with each number between 0 and 99', () => {
    const amount = 5
    const array = getNumbers(amount)

    expect(array[0] < 100 && array[0] > 0).toBe(true)
    expect(array[1] < 100 && array[1] > 0).toBe(true)
    expect(array[2] < 100 && array[2] > 0).toBe(true)
    expect(array[3] < 100 && array[3] > 0).toBe(true)
    expect(array[4] < 100 && array[4] > 0).toBe(true)
  })
})
