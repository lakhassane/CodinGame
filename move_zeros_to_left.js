let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let index = 0;
let i = 0;

while (i < arr.length) {
  if (arr[i] === 0) {
    index = i;

    for (let j = index; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = 0;
    i = index + 1;
    console.log("arr", arr);
    console.log("index", index);
  } else {
    i++;
  }
}

// O(n)
