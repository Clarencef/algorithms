export default function fizzbuzz(num) {
  if (!num) return console.warn('請輸入一個數字');
  let infoArr = [];

  for (let i = 1;i <= num; i++) {
    if (i % 15 === 0) infoArr.push(`${i} - FizBuzz`);
    else if (i % 3 === 0) infoArr.push(`${i} - Fizz`);
    else if (i % 5 === 0) infoArr.push(`${i} - Buzz`);
    else infoArr.push(`${i}`);
  }
  const infoString = infoArr.join('<br>');

  return infoString;
};
