export const findLargerFactor = (factor1: number, factor2: number) => {
  let largerFactor = factor1;
  let smallerFactor = factor2;

  if (factor2 > factor1) {
    largerFactor = factor2;
    smallerFactor = factor1;
  }
  
  return { largerFactor, smallerFactor };
}
