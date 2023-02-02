///////////////// Insertion dans un tableau trié //////////////////


// Functions:

function NewArray(inputPath){
    let tempArray = [];
    for(i = 2; i < inputPath.length -1; i++){
        tempArray.push(inputPath[i]);
    }
    return tempArray;
}



function SortedInsert(array, newItem){
    let tempArray = [];

    for(i = 0; i < array.length; i++){
        if(newItem < array[i]){
            tempArray.push(newItem);
            
            for(j = i; j < array.length; j++){
                tempArray.push(array[j]);
            }
            return tempArray;
        
        }else{
            tempArray.push(array[i]);            
        }
    }

    tempArray.push(newItem);
    return tempArray;
}



function ArrayToString(outputArray){
    if(outputArray == "Error!"){
        return outputArray;
    }else{
        let tempString = "";
    
        for(i = 0; i < outputArray.length; i++){
            tempString += outputArray[i] + " "; 
        }
        return tempString;
    }
}

// Errors:


// Parsing:

const path = process.argv;
let inputArray = NewArray(path);
let newElement = path[path.length-1];


// Resolve:

let newArray = SortedInsert(inputArray, newElement);


// Display:

console.log(ArrayToString(newArray));
