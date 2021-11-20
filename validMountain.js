/**
 * @param {number[]} arr
 * @return {boolean}
 */
var findMax = function (arr) {
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  else {
    const maxIndex = findMax(arr);
    console.log(arr.length);
    if (maxIndex === 0 || maxIndex === arr.length - 1) return false;
    for (i = maxIndex; i > 0; i--) {
      if (arr[i] <= arr[i - 1]) return false;
    }
    for (j = maxIndex; j < arr.length; j++) {
      if (arr[j] <= arr[j + 1]) return false;
    }
    return true;
  }
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(validMountainArray(arr));
