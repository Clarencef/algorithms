export default function caesarCipher(str, num) {
  num = num % 26;
  let lowerCaseString = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentText = lowerCaseString[i];
    let currentIndex,
      modifiedIndex;

    if (/[\W]/.test(currentText)) {
      newString += currentText;
      continue;
    }
    currentIndex = alphabet.indexOf(currentText);
    modifiedIndex = currentIndex + num;
    if (modifiedIndex > 25) modifiedIndex = modifiedIndex - 26;
    if (modifiedIndex < 0) modifiedIndex = 26 + modifiedIndex;
    if (str[i] === currentText.toUpperCase()) {
      newString += alphabet[modifiedIndex].toUpperCase();
    } else {
      newString += alphabet[modifiedIndex];
    }
  }

  return newString;
};
