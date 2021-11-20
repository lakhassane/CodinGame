/**
    (Example 1:)
    text = "The quick brown fox is quick"
             0   1     2     3   4  5 
    query = "quick"
    result = [1, 5]
    
    Example 2:
    text = "The quick brown fox is quick"
             0   1     2     3   4  5
    query = "quick fox", k = 2
    result = [1]
    
    Example 3:
    text = "The quick brown fox is quick ... quick fox"
             0   1     2     3   4  5         27   28
    query = "quick fox", k = 2
    result = [1, 27]

 */
text =
  "The quick brown fox is quick slkj slkj slkj slkj slksj lskj slkjslkj slkjsljslksj lksjlsj ls quick fox";
query = "quick fox";
k = 2;

const occurence = (text, query, k) => {
  const textArray = text.split(" ");
  words = query.split(" "); // => ["quick", "fox"]
  const indexes = [];
  words.forEach((word) => {
    indexes.push(textArray.indexOf(word)); // => index (1, 3)
  });

  if (indexes[1] - indexes[0] <= k) return [indexes[0]];
};

/*
[The, quick, brown,... fox is quick sl]
query => ["query", "fox"]
*/
const occurenceV2 = (text, query, k) => {
  const textArray = text.split(" ");
  words = query.split(" "); // => ["quick", "fox"]
  let indexes = {};
  const result = [];

  for (let i = 0; i < textArray.length; i++) {
    words.forEach((word) => {
      if (textArray[i] === word) {
        indexes[word] = i; // indexes[query] = 1
      }
    });

    const vals = Object.values(indexes);
    if (vals[1] - vals[0] <= k) {
      indexes = {};
      result.push(vals[0]);
    }
  }
  return result;
};

console.log(occurenceV2(text, query, k));
