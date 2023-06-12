import { findMaxDivisibleFactor } from "./findMaxDivisibleFactor";

// eg. 75x + 7y can be refactored to (10x + y) * 7 + 5x
const refactor = (xFactor: number, yFactor: number, variableName1: string, variableName2: string) => {
  if (xFactor === 1 || yFactor === 1) {
    return;
  }
  const { maxDivisibleFactor, remainder } = findMaxDivisibleFactor(xFactor, yFactor);
  
  const a = maxDivisibleFactor / yFactor;
  const b = yFactor / yFactor;

  console.log(`(${variableName1}${a}, ${variableName2}${b}) x ${yFactor}, ${variableName1}${remainder}`);
  refactor(yFactor, remainder, `(${variableName1}${a}, ${variableName2}${b})`, variableName1);
}