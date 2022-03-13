function pairwise(arr, compareValue) {
  let matchedIndices = []
  let result = 0;
  for(let index=0;index<arr.length-1;index++){
      let currentNumber=arr[index];
      for(let testIndex=0;testIndex<arr.length;testIndex++){
        if(index===testIndex) continue;
        let testNumber=arr[testIndex];
        let indexWasUsed = matchedIndices.indexOf(index) > -1;
        if(indexWasUsed) break;
        console.log(index+" "+testIndex)

        let testIndexWasNotUsed = matchedIndices.indexOf(testIndex) ===-1;
        let sumValueMatched= (currentNumber+testNumber)===compareValue;

        //console.log(matchedIndices)
        if(testIndexWasNotUsed===true && sumValueMatched===true){
          matchedIndices.push(index)
          matchedIndices.push(testIndex)
        //console.log(index+testIndex)
        //console.log(compareValue)
          result+=(index+testIndex)
          break;
        }
      }
  }
  return result;
}

//console.log(pairwise([1,4,2,3,0,5], 7));
console.log(pairwise([1, 3, 2, 4], 4))