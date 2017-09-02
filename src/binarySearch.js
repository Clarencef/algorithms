export default function binarySearch(sortArr, key) {
  const sortArrLen = sortArr.length;
  const middleIndex = Math.floor(sortArrLen / 2);
  const middleElem = sortArr[middleIndex];

  if (middleElem === key) return true;
  else if (middleElem < key && sortArrLen > 1) {
    const newArr = sortArr.splice(middleIndex, sortArrLen);

    return binarySearch(newArr, key);
  } else if (middleElem > key && sortArrLen > 1) {
    const newArr = sortArr.splice(0, middleIndex);

    return binarySearch(newArr, key);
  } else {
    return false;
  }
};
