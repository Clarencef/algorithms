import { fizzbuzzAnswer } from './fizzbuzz';
import { ransomNoteAnswer } from './harmlessRansomNote';
import isPalindrome from './isPalindrome';
import caesarCipher from './caesarCipher';
import reverseWord from './reverseWord';
import reversedArrayInPlace from './reversedArrayInPlace';
import meanMedianMode from './meanMedianMode';
import twoSum from './twosum';
import BinarySearchTree from './binarySearchTree';
import binarySearch from './binarySearch';
import {fibonacci, fibMemo} from './fibonacci';
import factorial from './factorial';
import largestBinaryGap from './largestBinaryGap';

let est = new BinarySearchTree();

est.add(55);
est.add(67);
est.add(10);
est.add(29);
est.add(40);
est.add(5);
est.add(16);
est.add(25);
est.add(2);
est.add(1);
est.add(3);
console.log(est.size());
console.log(est.contains(10));
est.myconsole();
est.remove(16);
console.log(est.toArray());
console.log(est.toArray().toString());

window.onload = function () {
  const fizzBuzzAnswer = document.getElementsByClassName('fizzBuzz-answer')[0];
  const harmlessRansomNoteAnswer = document.getElementsByClassName('randomNote-answer')[0];
  const ispalindromeBlock = document.getElementById('ispalindrome');
  const caesarCipherBlock = document.getElementById('caesarCipher');
  const reversedWordBlock = document.getElementById('reversedWord');
  const reversedArrayInPlaceBlock = document.getElementById('reversedArrayInPlace');
  const meanMedianModeBlock = document.getElementById('meanMedianMode');
  const twoSumBlock = document.getElementById('twoSum');
  const binarysearchBlock = document.getElementById('binarysearch');
  const largestBinaryGapBlock = document.getElementById('largestBinaryGap');
  const meanMedianModeArr = [32, 4, 2, 5, 44, 55, 55, 4, 1, 46];
  const twoSumArr = [40, 11, 19, 17, -12];
  const binarySearchArr = [1, 3, 5, 7, 9, 11, 45, 55, 65, 77, 89];
  const binarySearchKey = 77;
  const twoSumExpect = 28;
  const twoSumResult = twoSum(twoSumArr, twoSumExpect).map((item) => {
    return '[' + item.join(', ') + ']';
  });
  const meanMedianModeObj = meanMedianMode(meanMedianModeArr);
  const {
    origin,
    reversed
  } = reverseWord('this is test text for function');
  const caesarCipherArr = [
    caesarCipher('Zoo Keeper', 2),
    caesarCipher('Big Car', -16),
    caesarCipher('Javascript', -900)
  ];

  fizzBuzzAnswer.innerHTML = fizzbuzzAnswer;
  harmlessRansomNoteAnswer.innerHTML = ransomNoteAnswer;
  ispalindromeBlock.innerHTML = '<h2>IsPalindrome</h2>' + isPalindrome("Madam I'm Adam");
  caesarCipherBlock.innerHTML = '<h2>CaesarCipher</h2>' + caesarCipherArr.join('<br>');
  reversedWordBlock.innerHTML = '<h2>Reverse Word</h2>' + origin + ':<br>' + reversed;
  reversedArrayInPlaceBlock.innerHTML = '<h2>Reversed Array Place</h2>' + reversedArrayInPlace(['r', 4, 'a', true]).join(', ');
  meanMedianModeBlock.innerHTML = '<h2>mean median and mode</h2>' + 'Array: [' + meanMedianModeArr.join(', ') + '] <br/>' +
  'Mean: ' + meanMedianModeObj.Mean + '<br/>' +
  'Median: ' + meanMedianModeObj.Median + '<br/>' +
  'Mode: ' + meanMedianModeObj.Mode.join(', ');
  twoSumBlock.innerHTML = '<h2>two sum</h2>' + 'Array: [' + twoSumArr.join(', ') + '] Expect sum:' + twoSumExpect +'<br/>' +
  'result: [' + twoSumResult.join(', ') + ']';
  twoSumBlock.innerHTML = '<h2>two sum</h2>' + 'Array: [' + twoSumArr.join(', ') + '] Expect sum:' + twoSumExpect +'<br/>' +
  'result: [' + twoSumResult.join(', ') + ']';
  binarysearchBlock.innerHTML = '<h2>binary search</h2>' + 'Array: [' + binarySearchArr.join(', ') + '] <br/>' +
  'result: ' + binarySearch(binarySearchArr, binarySearchKey);
  largestBinaryGapBlock.innerHTML = '<h2>largestBinaryGap</h2>' + 'num: 1028 <br/>'+
  'result: ' + largestBinaryGap(1028);
  console.log(fibonacci(12));
  console.log(fibMemo(8));
  console.log(factorial(10));
};
