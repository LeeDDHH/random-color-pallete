const hexCodeArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
const colorLength = 6

export const randomHexColorCode = () => `${[...Array(colorLength)].map((_, index) => hexCodeArray[randomHexIndex()]).join('')}`
const randomHexIndex = () => Math.floor(Math.random() * hexCodeArray.length)
