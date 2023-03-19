//////////////// Contôle de pass sanitaire ///////////////


// Functions:

function NewArray(inputPath){
    let tempArray = [];
    for(i = 2; i < inputPath.length -1; i++){
        tempArray.push(inputPath[i]);
    }
    return tempArray;
}


function IsStringInArray(inputArray, string){  
    if(IsEnoughArg(inputArray)){
        let newStringArray = [];

        for(i = 0; i < inputArray.length; i++){
            let item = inputArray[i];

            // Check if there is correspondence:
            if(item.indexOf(string) != -1){
                newStringArray.push(item);
            }
        }
        return newStringArray;

    }else{
        return "Error!"
    }
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

function IsEnoughArg(inputArray){
    if(inputArray.length >= 1){
        return true;
    }else{
        return false;
    }
}



// Parsing:

const path = process.argv;
let inputArray = NewArray(path);
let refString = path[path.length-1];



// Resolve:

let newArray = ArrayToString(IsStringInArray(inputArray, refString));



// Display:

console.log(newArray);



// 'air13.js' test:

function air13Test(){
    return newArray;
}