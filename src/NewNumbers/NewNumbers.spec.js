import { newNumbers } from './NewNumbers'

describe('New Numbers', () => {
  it('Returns New Numbers in order', () => {
    const n1 = [1, 2, 3, 4, 5]
    const n2 = newNumbers(n1)

    expect(n2[0]).toBe(n1[0])
    expect(n2[1]).toBe(n1[1])
    expect(n2[2]).toBe(n1[2])
    expect(n2[3]).toBe(n1[3])
    expect(n2[4]).toBe(n1[4])
  })

  it('Returns Same Number of Numbers', () => {
    const n1 = [5, 2, 3, 1, 4]
    const n2 = newNumbers(n1)

    expect(n2.length).toBe(n1.length)
  })
})
