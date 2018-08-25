export default function largestBinaryGap(num) {
  var bin = Math.abs(num).toString(2),
      finalMax = 0,
      currentMax;

  for (var i = 0; i < bin.length; i++) {
    currentMax = 0;
    while (bin[i] === "0") {
      ++currentMax && ++i;
    }
    if (bin[i] === '1' ) finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;
}