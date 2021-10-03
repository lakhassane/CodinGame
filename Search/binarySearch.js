// A = [5,7,10,15,19,23]
// B = [2,4,7,10,22,23]
// sample output [7,10,23]

// Complexity: O(m+n)
// In case A is really big (billions of elements)
// performance on this one is degrading
function intersection(A, B) {
  let s = new Set();
  let intersect = [];

  for (let i = 0; i < A.length; i++) {
    s.add(A[i]);
  }

  for (let i = 0; i < B.length; i++) {
    if (s.has(B[i])) {
      intersect.push(B[i]);
    }
  }
  return intersect;
}

// A >> B
// O(logn)
function bin_search_recursive(A, start, end, x) {
  let mid = Math.floor((start + end) / 2);

  if (A[mid] === x) {
    return true;
  }

  if (A[mid] > x) {
    return bin_search_recursive(A, start, mid, x);
  } else {
    return bin_search_recursive(A, mid + 1, end, x);
  }
}

// O(logn)
function bin_search(A, start, end, x) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (A[mid] === x) {
      return true;
    }

    if (A[mid] > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

// O(nlogn)
function main(A, B) {
  const end = A.length;
  for (i = 0; i < B.length; i++) {
    let found = bin_search2(A, 0, end, B[i]);
    if (found) {
      intersect.push(B[i]);
    }
  }
}
