const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('chracterAmountNumber')
const includeUppercaseElement = document.getElementById ('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeSymbolsElement = document.getElementById('includeSymbols')
const includeNumbersElement = document.getElementById('includeNumbers')
const form  = document.getElementById('passwordGeneratorForm')
const passwordDisplay  = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener ('input', syncCharacterAmount)

form.addEventListener('submit', e=> {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const includeNumbers = includeNumbersElement.checked
  const password = generatePassword (characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeLowercase, includeNumbers, includeSymbols, includeUppercase) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = []
  for (let i=0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacters.push(string.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

