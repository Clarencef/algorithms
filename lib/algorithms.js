/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _fizzbuzz = __webpack_require__(1);
	
	var _harmlessRansomNote = __webpack_require__(13);
	
	var _isPalindrome = __webpack_require__(3);
	
	var _isPalindrome2 = _interopRequireDefault(_isPalindrome);
	
	var _caesarCipher = __webpack_require__(4);
	
	var _caesarCipher2 = _interopRequireDefault(_caesarCipher);
	
	var _reverseWord2 = __webpack_require__(5);
	
	var _reverseWord3 = _interopRequireDefault(_reverseWord2);
	
	var _reversedArrayInPlace = __webpack_require__(6);
	
	var _reversedArrayInPlace2 = _interopRequireDefault(_reversedArrayInPlace);
	
	var _meanMedianMode = __webpack_require__(7);
	
	var _meanMedianMode2 = _interopRequireDefault(_meanMedianMode);
	
	var _twosum = __webpack_require__(8);
	
	var _twosum2 = _interopRequireDefault(_twosum);
	
	var _binarySearchTree = __webpack_require__(9);
	
	var _binarySearchTree2 = _interopRequireDefault(_binarySearchTree);
	
	var _binarySearch = __webpack_require__(10);
	
	var _binarySearch2 = _interopRequireDefault(_binarySearch);
	
	var _fibonacci = __webpack_require__(11);
	
	var _factorial = __webpack_require__(12);
	
	var _factorial2 = _interopRequireDefault(_factorial);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var est = new _binarySearchTree2.default();
	
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
	  var fizzBuzzAnswer = document.getElementsByClassName('fizzBuzz-answer')[0];
	  var harmlessRansomNoteAnswer = document.getElementsByClassName('randomNote-answer')[0];
	  var ispalindromeBlock = document.getElementById('ispalindrome');
	  var caesarCipherBlock = document.getElementById('caesarCipher');
	  var reversedWordBlock = document.getElementById('reversedWord');
	  var reversedArrayInPlaceBlock = document.getElementById('reversedArrayInPlace');
	  var meanMedianModeBlock = document.getElementById('meanMedianMode');
	  var twoSumBlock = document.getElementById('twoSum');
	  var binarysearchBlock = document.getElementById('binarysearch');
	  var meanMedianModeArr = [32, 4, 2, 5, 44, 55, 55, 4, 1, 46];
	  var twoSumArr = [40, 11, 19, 17, -12];
	  var binarySearchArr = [1, 3, 5, 7, 9, 11, 45, 55, 65, 77, 89];
	  var binarySearchKey = 77;
	  var twoSumExpect = 28;
	  var twoSumResult = (0, _twosum2.default)(twoSumArr, twoSumExpect).map(function (item) {
	    return '[' + item.join(', ') + ']';
	  });
	  var meanMedianModeObj = (0, _meanMedianMode2.default)(meanMedianModeArr);
	
	  var _reverseWord = (0, _reverseWord3.default)('this is test text for function');
	
	  var origin = _reverseWord.origin;
	  var reversed = _reverseWord.reversed;
	
	  var caesarCipherArr = [(0, _caesarCipher2.default)('Zoo Keeper', 2), (0, _caesarCipher2.default)('Big Car', -16), (0, _caesarCipher2.default)('Javascript', -900)];
	
	  fizzBuzzAnswer.innerHTML = _fizzbuzz.fizzbuzzAnswer;
	  harmlessRansomNoteAnswer.innerHTML = _harmlessRansomNote.ransomNoteAnswer;
	  ispalindromeBlock.innerHTML = '<h2>IsPalindrome</h2>' + (0, _isPalindrome2.default)("Madam I'm Adam");
	  caesarCipherBlock.innerHTML = '<h2>CaesarCipher</h2>' + caesarCipherArr.join('<br>');
	  reversedWordBlock.innerHTML = '<h2>Reverse Word</h2>' + origin + ':<br>' + reversed;
	  reversedArrayInPlaceBlock.innerHTML = '<h2>Reversed Array Place</h2>' + (0, _reversedArrayInPlace2.default)(['r', 4, 'a', true]).join(', ');
	  meanMedianModeBlock.innerHTML = '<h2>mean median and mode</h2>' + 'Array: [' + meanMedianModeArr.join(', ') + '] <br/>' + 'Mean: ' + meanMedianModeObj.Mean + '<br/>' + 'Median: ' + meanMedianModeObj.Median + '<br/>' + 'Mode: ' + meanMedianModeObj.Mode.join(', ');
	  twoSumBlock.innerHTML = '<h2>two sum</h2>' + 'Array: [' + twoSumArr.join(', ') + '] Expect sum:' + twoSumExpect + '<br/>' + 'result: [' + twoSumResult.join(', ') + ']';
	  twoSumBlock.innerHTML = '<h2>two sum</h2>' + 'Array: [' + twoSumArr.join(', ') + '] Expect sum:' + twoSumExpect + '<br/>' + 'result: [' + twoSumResult.join(', ') + ']';
	  binarysearchBlock.innerHTML = '<h2>binary search</h2>' + 'Array: [' + binarySearchArr.join(', ') + '] <br/>' + 'result: ' + (0, _binarySearch2.default)(binarySearchArr, binarySearchKey);
	  console.log((0, _fibonacci.fibonacci)(12));
	  console.log((0, _fibonacci.fibMemo)(8));
	  console.log((0, _factorial2.default)(10));
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fizzbuzz;
	function fizzbuzz(num) {
	  if (!num) return console.warn('請輸入一個數字');
	  var infoArr = [];
	
	  for (var i = 1; i <= num; i++) {
	    if (i % 15 === 0) infoArr.push(i + ' - FizBuzz');else if (i % 3 === 0) infoArr.push(i + ' - Fizz');else if (i % 5 === 0) infoArr.push(i + ' - Buzz');else infoArr.push('' + i);
	  }
	  var infoString = infoArr.join('<br>');
	
	  return infoString;
	};
	
	var fizzbuzzAnswer = exports.fizzbuzzAnswer = fizzbuzz(20) || '請輸入一個數字';

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isPalindrome;
	function isPalindrome(str) {
	  var lowerCaseStr = str.toLowerCase();
	  var validateStr = lowerCaseStr.replace(/[\W_]+/g, '');
	  var reverseStr = validateStr.split('').reverse().join('');
	
	  return validateStr === reverseStr;
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = caesarCipher;
	function caesarCipher(str, num) {
	  num = num % 26;
	  var lowerCaseString = str.toLowerCase();
	  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	  var newString = '';
	
	  for (var i = 0; i < lowerCaseString.length; i++) {
	    var currentText = lowerCaseString[i];
	    var currentIndex = void 0,
	        modifiedIndex = void 0;
	
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
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reverseWord;
	function reverseWord(str) {
	  var strArr = str.split('');
	  var reversedStrArr = [];
	
	  strArr.forEach(function (word) {
	    reversedStrArr.unshift(word);
	  });
	
	  return {
	    origin: str,
	    reversed: reversedStrArr.join('')
	  };
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reversedArrayInPlace;
	function reversedArrayInPlace(arr) {
	  for (var i = 0; i < arr.length / 2; i++) {
	    var temp = arr[i];
	
	    arr[i] = arr[arr.length - 1 - i];
	    arr[arr.length - 1 - i] = temp;
	  }
	  return arr;
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = meanMedianMode;
	function getMean(arr) {
	  var sum = arr.reduce(function (prev, next) {
	    return prev + next;
	  }, 0);
	
	  return sum / arr.length;
	}
	
	function getMedian(arr) {
	  var orderArr = arr.sort(function (a, b) {
	    return a - b;
	  });
	
	  if (arr.length % 2 !== 0) {
	    var medainIndex = Math.floor(orderArr.length / 2);
	
	    return orderArr[medainIndex];
	  } else {
	    var mid1 = orderArr[orderArr.length / 2 - 1];
	    var mid2 = orderArr[orderArr.length / 2];
	
	    return (mid1 + mid2) / 2;
	  }
	}
	
	function getMode(arr) {
	  var ModeObj = {};
	  var maxFrequency = 0;
	  var modes = [];
	
	  arr.forEach(function (item) {
	    if (!ModeObj[item]) ModeObj[item] = 0;
	    ModeObj[item]++;
	  });
	
	  for (var num in ModeObj) {
	    if (ModeObj[num] > maxFrequency) {
	      modes = [num];
	      maxFrequency = ModeObj[num];
	    } else if (ModeObj[num] === maxFrequency) modes.push(num);
	    if (modes.length === Object.keys(ModeObj).length) modes = [];
	  }
	
	  return modes;
	};
	
	function meanMedianMode(arr) {
	  return {
	    Mean: getMean(arr),
	    Median: getMedian(arr),
	    Mode: getMode(arr)
	  };
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = twoSum;
	function twoSum(arr, sum) {
	  var pairs = [];
	  var hashtable = [];
	
	  for (var i = 0; i < arr.length; i++) {
	    var currentNum = arr[i];
	    var counterpart = sum - currentNum;
	
	    if (hashtable.indexOf(counterpart) !== -1) pairs.push([currentNum, counterpart]);
	    hashtable.push(currentNum);
	  }
	
	  return pairs;
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BinarySearchTree = function () {
	  function BinarySearchTree() {
	    _classCallCheck(this, BinarySearchTree);
	
	    this._root = null;
	  }
	  // 先序遍歷：遍歷順序是：根、左子樹、右子樹。
	  // 傳入的process 是一個必須節點內執行的function
	
	
	  _createClass(BinarySearchTree, [{
	    key: "traverse",
	    value: function traverse(process) {
	      // 用來recursive traverse每個節點的 helper function
	      function inOrder(node) {
	        if (node) {
	          if (node.left !== null) {
	            inOrder(node.left);
	          }
	
	          process.call(this, node);
	
	          if (node.right !== null) {
	            inOrder(node.right);
	          }
	        }
	      }
	
	      inOrder(this._root);
	    }
	  }, {
	    key: "add",
	    value: function add(value) {
	      // 創造新的節點
	      var node = {
	        value: value,
	        left: null,
	        right: null
	      },
	
	      // 用來作為遍歷節點的當前節點
	      current = void 0;
	
	      if (this._root === null) {
	        this._root = node;
	      } else {
	        current = this._root;
	        while (true) {
	          // 如果傳入的value小於當前節點的值，往當前節點的左邊節點尋找
	          if (value < current.value) {
	            if (current.left === null) {
	              // 設定node為當前節點的左節點，並離開loop
	              current.left = node;
	              break;
	            } else {
	              // 設定當前節點的左節點為當前節點，並繼續進行loop
	              current = current.left;
	            }
	          } else if (value > current.value) {
	            // 如果傳入的value小於當前節點的值，往當前節點的左邊節點尋找
	            if (current.right === null) {
	              current.right = node;
	              break;
	            } else {
	              current = current.right;
	            }
	          } else {
	            // value = 當前節點的值，不增加節點並跳出loop
	            break;
	          }
	        }
	      }
	    }
	  }, {
	    key: "remove",
	    value: function remove(value) {
	      var found = false,
	          parent = null,
	          current = this._root,
	          childCount = void 0,
	          replacementParent = void 0,
	          replacement = void 0;
	
	      while (!found && current) {
	
	        if (value < current.value) {
	          parent = current;
	          current = current.left;
	        } else if (value > current.value) {
	          parent = current;
	          current = current.right;
	        } else {
	          found = true;
	        }
	      }
	
	      if (found) {
	        childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);
	        if (current === this._root) {
	          switch (childCount) {
	            case 0:
	              this._root = null;
	              break;
	            case 1:
	              this._root = current.right === null ? current.left : current.right;
	              break;
	            case 2:
	              replacement = this._root.left;
	              // 選出左分支最大的值
	              while (replacement.right !== null) {
	                replacementParent = replacement;
	                replacement = replacement.right;
	              }
	
	              if (replacementParent !== null) {
	
	                // 將左分支最大的值從原來的位置移除
	                replacementParent.right = replacement.left;
	
	                // 將左分支最大的值作為root node，
	                // 原root node的左右子節點設為新root node 左右子節
	                replacement.right = this._root.right;
	                replacement.left = this._root.left;
	              } else {
	                // 左分支因this._root.left沒有子節點而消失
	                replacement.right = this._root.right;
	              }
	
	              // 將replacement設為新root node
	              this._root = replacement;
	              break;
	            default:
	              break;
	          }
	        } else {
	          switch (childCount) {
	            case 0:
	              if (current.value < parent.value) {
	                parent.left = null;
	              } else {
	                parent.right = null;
	              };
	              break;
	            case 1:
	              if (current.value < parent.value) {
	                parent.left = current.left === null ? current.right : current.left;
	              } else {
	                parent.right = current.left === null ? current.right : current.left;
	              };
	              break;
	            case 2:
	              // 將current左子節點設為取代節點，current = replacementParent
	              replacement = current.left;
	              replacementParent = current;
	
	              // 選出左分支最大的值
	              while (replacement.right !== null) {
	                replacementParent = replacement;
	                replacement = replacement.right;
	              }
	
	              replacementParent.right = replacement.left;
	
	              replacement.right = current.right;
	              replacement.left = current.left;
	
	              if (current.value < parent.value) {
	                parent.left = replacement;
	              } else {
	                parent.right = replacement;
	              }
	              break;
	            default:
	              break;
	          }
	        }
	      }
	    }
	
	    // 給定一個value 若 這個value出現在二元樹中 return true，反之 return false
	
	  }, {
	    key: "contains",
	    value: function contains(value) {
	      var found = false,
	          current = this._root; // 每次while loop實都會被變更為當前node
	
	      // 當found不等於true，並有還有剩餘節點時繼續執行loop
	      while (!found && current) {
	
	        // 如果輸入值小於當前node的值，往當前node的left node尋找該值
	        if (value < current.value) {
	          current = current.left;
	          // 如果輸入值大於當前node的值，往當前node的right node尋找該值
	        } else if (value > current.value) {
	          current = current.right;
	          // 輸入值等於當前node的值，set found = true找到該節點
	        } else {
	          found = true;
	        }
	      }
	
	      return found;
	    }
	  }, {
	    key: "size",
	    value: function size() {
	      var length = 0;
	
	      this.traverse(function (node) {
	        length++;
	      });
	
	      return length;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	      var result = [];
	
	      this.traverse(function (node) {
	        result.push(node.value);
	      });
	
	      return result;
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.toArray.toString();
	    }
	  }, {
	    key: "myconsole",
	    value: function myconsole() {
	      console.log(this._root);
	    }
	  }]);
	
	  return BinarySearchTree;
	}();
	
	exports.default = BinarySearchTree;
	;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = binarySearch;
	function binarySearch(sortArr, key) {
	  var sortArrLen = sortArr.length;
	  var middleIndex = Math.floor(sortArrLen / 2);
	  var middleElem = sortArr[middleIndex];
	
	  if (middleElem === key) return true;else if (middleElem < key && sortArrLen > 1) {
	    var newArr = sortArr.splice(middleIndex, sortArrLen);
	
	    return binarySearch(newArr, key);
	  } else if (middleElem > key && sortArrLen > 1) {
	    var _newArr = sortArr.splice(0, middleIndex);
	
	    return binarySearch(_newArr, key);
	  } else {
	    return false;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function fibonacci(position) {
	  if (position < 3) return 1;else return fibonacci(position - 1) + fibonacci(position - 2);
	};
	
	function fibMemo(index) {
	  var cache = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	  if (cache[index]) return cache[index];else {
	    if (index < 3) return 1;else {
	      console.log(cache);
	      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
	    }
	  }
	  return cache[index];
	};
	
	exports.fibonacci = fibonacci;
	exports.fibMemo = fibMemo;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = factorial;
	/*
	  Make a function that computes a factorial recursively.
	  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
	  n * (n-1) * (n-2) ... * 3 * 2 * 1
	  
	  Call the function factorial
	  
	  factorial(1) = 1
	  factorial(2) = 2
	  factorial(3) = 6 
	*/
	
	function factorial(n) {
	  if (n <= 1) return 1;
	  return n * factorial(n - 1);
	};
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = harmlessRansomNote;
	function harmlessRansomNote(noteTxt, magazineTxt) {
	  var compareObj = {};
	  var noteTxtArr = noteTxt.split(' ');
	  var MagazineTxtArr = magazineTxt.split(' ');
	  var noteIsPossible = true;
	
	  MagazineTxtArr.forEach(function (text) {
	    if (!compareObj[text]) compareObj[text] = 0;
	    compareObj[text]++;
	  });
	
	  noteTxtArr.forEach(function (text) {
	    if (compareObj[text]) {
	      compareObj[text]--;
	      if (compareObj[text] < 0) noteIsPossible = false;
	    } else noteIsPossible = false;
	  });
	  return noteIsPossible;
	};
	
	var ransomNoteAnswer = exports.ransomNoteAnswer = harmlessRansomNote('this is this', 'this is the text of the note');

/***/ }
/******/ ]);
//# sourceMappingURL=algorithms.js.map