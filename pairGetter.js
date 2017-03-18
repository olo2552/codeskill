let input = [11,22,33,44,55,66,77,88,99];

function* pairGetter(array) {
  	let index = 0;
  	while(index < array.length)
    		if(array[index+2] !== undefined) {
    				yield [array[index++], array[index++]];
          	        
        }
				else {
        		yield [array[index++]];
        }
}

function arraySummer (array) {
		sum = 0;
    array.forEach((iterator) => {
    		sum += iterator;
    });
    return sum;
}

let currentPair = pairGetter(input);

//teraz mam pary id zwarcane przez generator

console.log(...currentPair);

console.log(currentPair.next()); 
console.log(currentPair.next()); 
console.log(currentPair.next()); 
console.log(currentPair.next()); 
console.log(currentPair.next()); 
console.log(currentPair.next()); 
