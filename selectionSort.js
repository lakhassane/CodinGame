// O(n)
const findMin = (arr, index) => {
  console.log("Starting at", index);
  let min = index;
  for (let i = index; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }
  return min;
};

// O(1)
const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

let arr = [64, 25, 12, 22, 11];

// O(n)
for (let i = 0; i < arr.length; i++) {
  let minIndex = findMin(arr, i);
  swap(arr, i, minIndex);
}

console.log("============ Final Array ============");
console.log(arr);
console.log("=====================================");

// The whole code has a complexity of O(n^2)
