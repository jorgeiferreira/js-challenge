function getInsertPosition(sortedArray, item){
  for(let sortedIndex=sortedArray.length-1;sortedIndex>-1;sortedIndex--){
    let currentSortedItem = sortedArray[sortedIndex];
    if(item>currentSortedItem){
      return sortedIndex+1;
    }
  }
  return 0;
}
function insertionSort(array) {
  // Only change code below this line
  let sortedArray = [array[0]]

  for(let index=1; index < array.length; index ++){
    let currentItem= array[index];
    let insertIndex = getInsertPosition(sortedArray, currentItem);
    sortedArray.splice(insertIndex,0,currentItem)
  }

  return sortedArray;
  // Only change code above this line
}

console.log(insertionSort([5, 4, 33, 2, 8]))