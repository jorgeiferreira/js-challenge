function swapCharacter(theString,index1, index2){
   let result = "";
   for(let charIndex = 0; charIndex < theString.length; charIndex++){
     if(charIndex=== index1){
       result+=theString[index2]
     }else if(charIndex=== index2){
       result+=theString[index1]
     }else{
       result+=theString[charIndex]
     }
   }
   return result;
}

function getPermutations(originalValue, permIndex=0) {
  //let currentChar = 
  let result = [];
  let theString =  originalValue
  for(let index=permIndex;index<originalValue.length;index++){
    let stringToPerm = swapCharacter(theString,permIndex, index)
    result.push(stringToPerm)
    let innerPerms = getPermutations(stringToPerm, permIndex+1).slice(1);
    innerPerms.forEach((x)=>result.push(x))
  }
  return result;
}

function findDuplicates(stringValue){
  let lastCharacter = stringValue[0];
  for(let index = 1; index < stringValue.length; index ++){
    let currentCharacter = stringValue[index];
    if(lastCharacter===currentCharacter) return true;
    lastCharacter = currentCharacter;
  }
  return false;
}

function permAlone(stringValue) {
  let permutations = getPermutations(stringValue)
  let count =0;
  permutations.forEach((item)=>{
    if(!findDuplicates(item)){
      count++
    }
  });
  
  console.log(permutations)
  console.log(count)

  return count;
}

permAlone('aab');


