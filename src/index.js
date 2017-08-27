import FizzBuzz from './fizzbuzz';
import harmlessRandomNote from './harmlessRandomNote';
import isPalindrome from './isPalindrome';
import caesarCipher from './caesarCipher';
import reverseWord from './reverseWord';
import reversedArrayInPlace from './reversedArrayInPlace';

export default class BinarySearch {

  constructor() {
    this._root = null;
  }
  // 先序遍歷：遍歷順序是：根、左子樹、右子樹。
  // 傳入的process 是一個必須節點內執行的function
  traverse(process) {
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

  add(value) {
    // 創造新的節點
    let node = {
        value: value,
        left: null,
        right: null
      },
      // 用來作為遍歷節點的當前節點
      current;

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

  remove(value) {
    let found = false,
      parent = null,
      current = this._root,
      childCount,
      replacementParent,
      replacement;

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
              parent.left = (current.left === null ? current.right : current.left);
            } else {
              parent.right = (current.left === null ? current.right : current.left);
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
  contains(value) {
    let found = false,
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

  size() {
    let length = 0;

    this.traverse(function (node) {
      length++;
    });

    return length;
  }

  toArray() {
    let result = [];

    this.traverse(function (node) {
      result.push(node.value);
    });

    return result;
  }

  toString() {
    return this.toArray.toString();
  }

  myconsole() {
    console.log(this._root);
  }
};

let est = new BinarySearch();

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
  const fizzBuzzInfo = FizzBuzz(20) || '請輸入一個數字';
  const fizzBuzzBlock = document.getElementById('fizzBuzzBlock');
  const harmlessRandomNoteBlock = document.getElementById('harmlessRandomNote');
  const ispalindromeBlock = document.getElementById('ispalindrome');
  const caesarCipherBlock = document.getElementById('caesarCipher');
  const reversedWordBlock = document.getElementById('reversedWord');
  const reversedArrayInPlaceBlock = document.getElementById('reversedArrayInPlace');
  const {
    origin,
    reversed
  } = reverseWord('this is test text for function');
  const caesarCipherArr = [
    caesarCipher('Zoo Keeper', 2),
    caesarCipher('Big Car', -16),
    caesarCipher('Javascript', -900)
  ];

  console.log();
  fizzBuzzBlock.innerHTML = '<h2>FizzBuzzBlock</h2>' + fizzBuzzInfo;
  harmlessRandomNoteBlock.innerHTML = '<h2>HarmlessRandomNote</h2>' + harmlessRandomNote('this is this', 'this is the text of the note');
  ispalindromeBlock.innerHTML = '<h2>IsPalindrome</h2>' + isPalindrome("Madam I'm Adam");
  caesarCipherBlock.innerHTML = '<h2>CaesarCipher</h2>' + caesarCipherArr.join('<br>');
  reversedWordBlock.innerHTML = '<h2>Reverse Word</h2>' + origin + ':<br>' + reversed;
  reversedArrayInPlaceBlock.innerHTML = '<h2>Reversed Array Place</h2>' + reversedArrayInPlace(['r', 4, 'a', true]).join(", ");
};
