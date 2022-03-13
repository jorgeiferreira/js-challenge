function selectionSort(array) {
  // Only change code below this line
  for(let index=0;index<array.length;index++){
    let result = getMinimumValueOf(array, index);
    if(result.minimunValueIndex === index) continue
     array[result.minimunValueIndex]=array[index]
     array[index]=result.minimunValue
  }
  return array;
}

  function getMinimumValueOf(array,fromPosition){
    let minimunValue = array[fromPosition] ;
    let minimunValueIndex= fromPosition;
      for(let index=fromPosition+1;index<array.length;index++)
      {
          let currentValue = array[index];
          if(minimunValue>currentValue){
            minimunValue = currentValue;
            minimunValueIndex=index;
          }
      }
    return {minimunValueIndex, minimunValue};

    }