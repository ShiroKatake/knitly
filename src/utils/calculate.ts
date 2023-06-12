// How many stitches does our increase stitch take up?
// (eg. KFB is a normal knit followed by a knit in the back, 2 total)
const KFB_STITCH_COUNT = 2;

export interface PatternData {
  highCountBeforeIncrease: number;
  repeatCount1: number;
  lowCountBeforeIncrease: number;
  repeatCount2: number;
}

export const calculate = (startCount: number, endCount: number) => {
  if (endCount > startCount * 2) {
    return {  highCountBeforeIncrease: NaN, repeatCount1: 0, lowCountBeforeIncrease: NaN, repeatCount2: 0 };
  }
  // How many stitches are we increasing by?
  const increaseAmount = endCount - startCount;

  // How many stitches do we knit before we do an increase?
  const increaseRate = endCount / increaseAmount;

  // If it's not a whole number, that means a percentage of the time
  // we'll increase more often than the other time
  //
  // eg1. If increaseRate is 2.48, that means
  // 48% of the time we'll increase once every 3 stitches (the high count is always first)
  // 52% of the time we'll increase once every 2 stitches
  //
  // eg2. If increaseRate is 4.87, that means
  // 87% of the time we'll increase once every 5 stitches
  // 13% of the time we'll increase once every 4 stitches

  // Convert that percentage to increase frequency, ie. (K, KFB) x repeatCount
  const percentage = increaseRate - Math.floor(increaseRate);
  const repeatCount1 = Math.round(percentage * increaseAmount);
  const repeatCount2 = increaseAmount - repeatCount1;

  // Convert that percentage to increase interval, ie. (K x countBeforeIncrease, KFB) x repeatCount
  const highCountBeforeIncrease = Math.ceil(increaseRate) - KFB_STITCH_COUNT;
  const lowCountBeforeIncrease = Math.floor(increaseRate) - KFB_STITCH_COUNT;

  return {  highCountBeforeIncrease, repeatCount1, lowCountBeforeIncrease, repeatCount2 };
};