// Code your solution here
function findMatching(arr, target) {
    return arr.filter(
      (item) => item.toLowerCase() === target.toLowerCase()
    );
  }
  function fuzzyMatch(sourceArr, testStr) {
    return sourceArr.filter(
      (item) =>
        item.toLowerCase().indexOf(testStr.toLowerCase()) === 0
    );
  }
  
  function matchName(dataArr, targetName) {
    return dataArr.filter((entry) => entry.name === targetName);
  }
  