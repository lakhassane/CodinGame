let arr = [38, 27, 43, 100, 3, 9, 82, 10];

const merge = (arr, middle) => {
  // create temp arrays
  let temp1 = [];
  let temp2 = [];
  for (let i = 0; i < middle; i++) {
    temp1.push(arr[i]);
  }

  for (let i = middle; i < arr.length; i++) {
    temp2.push(arr[i]);
  }

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < temp1.length && j < temp2.length) {
    if (temp1[i] < temp2[j]) {
      arr[k] = temp1[i];
      i++;
    } else {
      arr[k] = temp2[j];
      j++;
    }
    k++;
  }

  // Fill arr with the remaining of temp1
  while (i < temp1.length) {
    arr[k] = temp1[i];
    i++;
    k++;
  }

  // Fill arr with the remaining of temp2
  while (j < temp2.length) {
    arr[k] = temp2[j];
    j++;
    k++;
  }
};

const mergeSort = (arr, left, right) => {
  if (left >= right) return;
  let middle = left + parseInt((right - left) / 2);
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);
  merge(arr, middle);
};

mergeSort(arr, 0, arr.length);
console.log(arr);
