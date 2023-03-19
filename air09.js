/////////////// Rotation vers la gauche /////////////


// Functions: 

function CreateArray(inputPath){
    if(IsEnoughArg(inputPath)){
        let tempArray = [];

        for(i = 2; i < inputPath.length; i++){
            tempArray.push(inputPath[i]);
        }
        return tempArray;
    }else{
        return false;
    }
}

function LeftRotation(array){
    if(array){
        let tempArray = array;
        let firstItem = tempArray.shift();

        tempArray.push(firstItem);

        return tempArray;
    }else{
        return "Error!";
    }
}

function ArrayToString(outputArray){
    if(outputArray == "Error!"){
        return outputArray;
    }else{
        /////////// Test with Reduce //////////////
        // const newList = outputArray.reduce(function(acc, currItem){
        //     acc += currItem + " ";
        //     return acc;
        // }, "");

        // return newList;
        /////////////////////////////////////////
        
        let newList = "";

        for(i = 0; i < outputArray.length; i++){
            if(i < outputArray.length -1){
                newList += `${outputArray[i]}, `;
            }else if(i == outputArray.length -1){
                newList += `${outputArray[i]}`;
            }
             
        }
        return newList;
    }
}
// Errors:

function IsEnoughArg(inputPath){
    if(inputPath.length >= 4){
        return true;
    }else{
        return false;
    }
}

// Parsing:

const path = process.argv;
let myArray = CreateArray(path);



// Resolve:

let myNewArray = ArrayToString(LeftRotation(myArray));



// Display:

console.log(myNewArray);




// 'air13.js' test:

function air13Test(){
    return myNewArray;
}