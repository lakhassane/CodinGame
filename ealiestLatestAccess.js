const checkMaxMin = (arr) => {
  let max = 0;
  let min = Infinity;
  // O(m) - m length of arr
  for ( let i = 0; i < arr.length; i++ ) {
    if ( Number(arr[i]) > max) max = Number(arr[i]);
   if ( Number(arr[i]) < min) min = Number(arr[i]);
  }
  return {max: max, min: min};
}

const buildUserToTimeMap = (logs) => {
  const logMap = {};
  // O(n)
  logs.forEach(log => {    
      if ( !logMap[log[1]] ) logMap[log[1]] = [];
      logMap[log[1]].push(log[0]);
  });
  return logMap;
}

const earlyLatestAccess = (logs) => {
  const access = {};
  // O(n)
  logs.forEach(log => {    
      if ( !access[log[1]] ) access[log[1]] = [];
  });
  const logMap = buildUserToTimeMap(logs);
  for ( let key in logMap) {
    let minMax = checkMaxMin(logMap[key]);
    access[key][0] = minMax.min;    
    access[key][1] = minMax.max;

  }

  return access;
  
}