function getBillionUsersDayIterative(growthRates) {
  // Write your code here
  const apps = growthRates.length;

  const target = 1000000000;

  let userCount = 0;
  let day = 0;
  while (userCount < target) {
    userCount = 0;
    for (let i = 0; i < apps; i++) {
      userCount += Math.pow(growthRates[i], day);
    }
    day++;
  }

  return day - 1;
}

const growthRate = (growthRates, mid) => {
  let userCount = 0;
  for (let i = 0; i < growthRates.length; i++) {
    userCount += Math.pow(growthRates[i], mid);
  }

  return userCount >= 1000000000;
};

// Binary Search solution
const getBillionUsersDay = (growthRates) => {
  let left = 0;
  let right = 10000;

  while (left < right) {
    const mid = left + (right - left) / 2;
    if (growthRate(growthRates, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return Math.round(left);
};

console.log(getBillionUsersDay([1.01, 1.02]));
