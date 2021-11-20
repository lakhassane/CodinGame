// We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order, and no URL was visited more than once per person.

// Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

// Sample input:

// user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
// user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
// user2 = ["a", "/one", "/two"]
// user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"]
// user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"]
// user5 = ["a"]
// user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"]

// Sample output:

// findContiguousHistory(user0, user1) => ["/pink", "/register", "/orange"]
// findContiguousHistory(user0, user2) => [] (empty)
// findContiguousHistory(user0, user0) => ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
// findContiguousHistory(user2, user1) => ["a"]
// findContiguousHistory(user5, user2) => ["a"]
// findContiguousHistory(user3, user4) => ["/plum", "/blue", "/tan", "/red"]
// findContiguousHistory(user4, user3) => ["/plum", "/blue", "/tan", "/red"]
// findContiguousHistory(user3, user6) => ["/tan", "/red", "/amber"]

// n: length of the first user's browsing history
// m: length of the second user's browsing history

const user0 = [
  "/start",
  "/green",
  "/blue",
  "/pink",
  "/register",
  "/orange",
  "/one/two",
];
const user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"];
const user2 = ["a", "/one", "/two"];
const user3 = [
  "/pink",
  "/orange",
  "/yellow",
  "/plum",
  "/blue",
  "/tan",
  "/red",
  "/amber",
  "/HotRodPink",
  "/CornflowerBlue",
  "/LightGoldenRodYellow",
  "/BritishRacingGreen",
];
const user4 = [
  "/pink",
  "/orange",
  "/amber",
  "/BritishRacingGreen",
  "/plum",
  "/blue",
  "/tan",
  "/red",
  "/lavender",
  "/HotRodPink",
  "/CornflowerBlue",
  "/LightGoldenRodYellow",
];
const user5 = ["a"];
const user6 = [
  "/pink",
  "/orange",
  "/six",
  "/plum",
  "/seven",
  "/tan",
  "/red",
  "/amber",
];

const longestContigus = (user0, user1) => {
  let maxCount = 0;
  // let len = user0.length < user1.length ? user1 : user0
  i = 0;

  while (i < user0.length) {
    let count = 0;
    if (user1.includes(user0[i])) {
      count++;
      index = user1.indexOf(user0[i]); // get the index where we found the elt
      startIndex = i;
      while (startIndex < user0.length) {
        if (user0[startIndex + 1] === user1[index + 1]) {
          count++;
        } else {
          if (count > maxCount) maxCount = count;
        }
        startIndex++;

        index++;
      }
    }

    i++;
  }
  const startingPoint = startIndex - maxCount - 1;

  const result = [];
  for (j = startingPoint; j < startingPoint + maxCount; j++) {
    result.push(user0[j]);
  }

  return result;
};

console.log(longestContigus(user0, user1));
