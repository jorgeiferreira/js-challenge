function sym(...args) {
  if(args.length > 2){
    let lastArray = args[args.length-1]
    let restOfArray = args.slice(0,args.length-1)
    return sym(sym(...restOfArray),lastArray)
  
  }else if(args.length === 2){
    let array1 = args[0];
    let array2 = args[1];
    var result = [];
    array1.forEach((element)=>{
      let found = array2.indexOf(element) > -1;
      let elementAdded = result.indexOf(element) > -1;
      if(!found && !elementAdded){
        result.push(element)
      } 
    });
    array2.forEach((element)=>{
      let found = array1.indexOf(element) > -1;
      let elementAdded = result.indexOf(element) > -1;
      if(!found && !elementAdded){
        result.push(element)
      } 
    });
    return result.sort();
  }
  return args;
  
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));