import { PatternData } from "./calculate";

const processK = (kValue: number) => {
  switch (kValue) {
    // If it's K -1, that means combine with 2st from KFB would just be a normal K
    case -1:
      return 'K';

    // If it's K0, that means it's KFB every time
    case 0:
      return '';

    default:
      return `K${kValue}, `;
  }
}

const processRepeatCount = (kValue: number, repeatCount: number) => {
  if (kValue === -1) {
    return '';
  }
  return 'KFB';
}

const process = (kValue: number, repeatCount: number) => {
  let message = ''

  if (repeatCount <= 0) {
    return message;
  }

  const k = processK(kValue);
  const kfb = processRepeatCount(kValue, repeatCount)
  
  message = `${k}${kfb}`;

  if (repeatCount > 1) {
    if (kValue === -1) {
      message = `${k}${kfb}${repeatCount}`;
    }
    else if (kValue === 0 || repeatCount === 1) {
      message = `${k}${kfb} x ${repeatCount}`;
    }
    else {
      message = `(${k}${kfb}) x ${repeatCount}`;
    }
  }

  return message;
}

export const patternProcessor = ({ highCountBeforeIncrease, repeatCount1, lowCountBeforeIncrease, repeatCount2 }: PatternData) => {
  const message1 = process(highCountBeforeIncrease, repeatCount1);
  const message2 = process(lowCountBeforeIncrease, repeatCount2);

  if (message1 === '' && message2 === '') {
    return console.log('No pattern found');
  }

  return console.log(`${message1}, ${message2}`);
}