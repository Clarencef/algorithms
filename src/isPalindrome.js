export default function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();
  const validateStr = lowerCaseStr.replace(/[\W_]+/g, '');
  const reverseStr = validateStr.split('').reverse().join('');

  return validateStr === reverseStr;

};
