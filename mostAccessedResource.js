const insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

const buildResourceToTimeMap = (logs) => {
  const resources = {}

  logs.forEach(log => {
    if ( !resources[log[2]]) resources[log[2]] = [];
    resources[log[2]].push(Number(log[0]));
  })

  for ( let key in resources ) {
    let sortedArr = insertionSort(resources[key])
    resources[key] = sortedArr;
  }

  return resources;
}


const countAccessBelow5 = (logs) => {
  const resources = buildResourceToTimeMap(logs)
  let countMap = []
  for (let key in resources ) {
    let count = 0;
    let maxCount = 0;
    if ( resources[key][0]<= 300 ) {
      count++;
    }
    
    for ( let i = 0; i < resources[key].length; i++ ) {
      let j = 0;
      
      for (j = i + 1; j <= resources[key].length - 1; j++ ) {
        if ( resources[key][j] - resources[key][i] <= 300 ) {
          count++;
          maxCount = maxCount < count ? count : maxCount;
        } else {
          count = 0;
          break
        }
      }
      if ( j == resources[key].length) break
    }
  
    countMap.push({resource: key, count: maxCount + 1})
  }
  countMap.sort((a, b) => b.count > a.count ? 1 : -1)
  return countMap[0];
}