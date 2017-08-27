export default function reverseWord(str) {
  let strArr = str.split('');
  let reversedStrArr = [];

  strArr.forEach(word => {
    reversedStrArr.unshift(word);
  });

  return reversedStrArr.join('');
};
