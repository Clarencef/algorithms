export default function twoSum(arr, sum) {
  var pairs = [];
  var hashtable = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let counterpart = sum - currentNum;

    if (hashtable.indexOf(counterpart) !== -1) pairs.push([currentNum, counterpart]);
    hashtable.push(currentNum);
  }

  return pairs;
};
