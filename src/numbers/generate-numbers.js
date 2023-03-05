export const getNumbers = (amount) => {
  const numbers = []
  for (let i = 1; i <= amount; i++) {
    numbers.push(Math.floor(Math.random() * 100))
  }
  return numbers
}
