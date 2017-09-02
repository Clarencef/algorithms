function getMean(arr) {
  const sum = arr.reduce((prev, next)=> {
    return prev + next;
  }, 0);

  return sum / arr.length;
}

function getMedian(arr) {
  const orderArr = arr.sort((a, b) => {
    return a - b;
  });

  if (arr.length % 2 !== 0) {
    const medainIndex = Math.floor(orderArr.length / 2);

    return orderArr[medainIndex];
  } else {
    let mid1 = orderArr[orderArr.length / 2 - 1];
    let mid2 = orderArr[orderArr.length / 2];

    return (mid1 + mid2) / 2;
  }

}

function getMode(arr) {
  let ModeObj = {};
  let maxFrequency = 0;
  let modes = [];

  arr.forEach((item) => {
    if (!ModeObj[item]) ModeObj[item] = 0;
    ModeObj[item] ++;
  });

  for (let num in ModeObj) {
    if (ModeObj[num] > maxFrequency) {
      modes = [ num ];
      maxFrequency = ModeObj[num];
    } else if (ModeObj[num] === maxFrequency) modes.push(num);
    if (modes.length === Object.keys(ModeObj).length) modes = [];
  }

  return modes;
};

export default function meanMedianMode(arr) {
  return {
    Mean: getMean(arr),
    Median: getMedian(arr),
    Mode: getMode(arr)
  };
};
