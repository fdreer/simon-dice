export const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const generateNextSequence = (sequence: number[]) => {
  let randomNumber

  do {
    randomNumber = Math.floor(Math.random() * 4) + 1
  } while (
    sequence.length >= 2 &&
    sequence[sequence.length - 1] === sequence[sequence.length - 2] &&
    randomNumber === sequence[sequence.length - 1]
  )
  return [...sequence, randomNumber]
}
