export const findMaxDivisibleFactor = (largerNumber: number, smallerNumber: number) => {
  let maxDivisibleFactor = largerNumber;
  while (maxDivisibleFactor > smallerNumber) {
    if (maxDivisibleFactor % smallerNumber === 0) {
      break;
    }
    maxDivisibleFactor -= 1;
  }
  const remainder = largerNumber - maxDivisibleFactor;
  return { maxDivisibleFactor, remainder };
}