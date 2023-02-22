///////////////// Insertion dans un tableau trié //////////////////


// Functions:

function NewArray(inputPath){
    let tempArray = [];
    for(i = 2; i < inputPath.length -1; i++){
        tempArray.push(inputPath[i]);
    }
    return tempArray;
}



function SortedInsert(sortedArray, newItem){
    if(IsEnoughArg(sortedArray) && isNumber(path)){
        if(isSort(sortedArray)){
            let tempArray = [];
             
            for(i = 0; i < sortedArray.length; i++){
                
                // if element to insert is lower:
                if(newItem < sortedArray[i]){
                    tempArray.push(newItem);

                    // then add the rest of sorted array:
                    for(j = i; j < sortedArray.length; j++){
                        tempArray.push(sortedArray[j]);
                    }
                    return tempArray;
                
                // if element to insert is higher:    
                }else{
                    tempArray.push(sortedArray[i]);            
                }
            }
            tempArray.push(newItem);
            return tempArray;
        
        }else{
            return "Error!";
        }
    }else{
        return "Error!";
    }
}



function ArrayToString(outputArray){
    // to have a string display:

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

function IsEnoughArg(sortedIntList){
    if(sortedIntList.length >= 2){
        return true;
    }else{
        return false;
    }
}


function IsNumber(pathArray){
    for(i = 2; i < pathArray.length; i++){
        let item = pathArray[i];
        
        if(isNaN(item)){
            return false;
        }
    }
    return true;
}


function IsSort(intList){
    for(i = 0; i < intList.length -1; i++){
        let item = intList[i];
        let nextItem = intList[i+1];

        if(item > nextItem){
            return false;
        }
    }
    return true;
}

// Parsing:

const path = process.argv;
let inputArray = NewArray(path);
let newElement = path[path.length-1];


// Resolve:

let newArray = SortedInsert(inputArray, newElement);


// Display:

console.log(ArrayToString(newArray));
