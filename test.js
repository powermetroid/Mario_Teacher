
 function QuickSort( unsortedArray ) {
    if(unsortedArray.length===0){
        return [];
    }
	var lowerValues = [];
    var higherValues = [];
   
    var temp = [];
  
    var pivotKey = 0;
    var pivotValue = unsortedArray.shift();
  
    for (var i = 0; i < unsortedArray.length; i++) {
      if (parseInt(unsortedArray[i]) < pivotValue) {
        lowerValues.push(unsortedArray[i]);
      } else if (parseInt(unsortedArray[i]) >= pivotValue) {
          higherValues.push(unsortedArray[i]);     
      }
    }
  
    temp[pivotKey] = pivotValue;

    return QuickSort(lowerValues).concat(QuickSort(higherValues));
}


let array = new Array(4);
array[0]=5
array[1]=9
array[2]=4
array[3]=0
array[4]=1
array[5]=8
console.log(array);
QuickSort(array);
console.log(array);