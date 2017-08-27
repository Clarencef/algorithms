export default function reverseWord(str) {
  let strArr = str.split('');
  let reversedStrArr = [];

  strArr.forEach(word => {
    reversedStrArr.unshift(word);
  });

  return {
    origin: str,
    reversed: reversedStrArr.join('')
  };
};
