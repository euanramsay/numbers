import { createInterface } from 'readline'
import { isPositiveNumberGreaterThanZero } from './numbers/check-number'
import { getNumbers } from './numbers/generate-numbers'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log('\nI can give you any number of numbers between 0 and 99')
readline.question('How many numbers would you like? ', (amount) => {
  if (isPositiveNumberGreaterThanZero(amount)) {
    console.log('\nHere are your numbers:')
    console.log(getNumbers(amount))
    readline.close()
  } else {
    console.log(`\nSorry, '${amount}' is not a valid input`)
    readline.close()
  }
})

readline.on('close', () => {
  console.log('\nThank you! :)')
  process.exit(0)
})
