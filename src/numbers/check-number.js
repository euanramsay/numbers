export const isPositiveNumberGreaterThanZero = (number) => {
  const inputNumber = Number(number)
  if (Number.isInteger(inputNumber) && inputNumber > 0) {
    return true
  } else {
    return false
  }
}
