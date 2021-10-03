// Check how many characters to remove from 2 strings to make them anagrams

function intersection(A, B) {
  let s = [];

  for (let i = 0; i < A.length; i++) {
    s.push(A[i]);
  }

  console.log(s);

  let count = 0;
  for (let i = 0; i < B.length; i++) {
    if (s.indexOf(B[i]) > -1) {
      count++;
    }
  }
  return A.length - count + (B.length - count);
}

console.log(intersection("glue", "legs"));
console.log(intersection("hello", "billion"));
console.log(intersection("candy", "day"));
