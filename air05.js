//////////////// Sur chacun d'entre eux /////////////////


// Functions:

function NewArray(inputPath){
    let tempArray = [];
    for(i = 2; i < inputPath.length -1; i++){
        tempArray.push(inputPath[i]);
    }
    return tempArray;
}


function OperationResults(resultArray){
    let tempResult = "";

    for(i = 0; i < resultArray.length; i++){
        tempResult += resultArray[i] + " ";
    }

    return tempResult;
}


function AddOrSub(nbrList, operatorSign, operatorNumber){
    let result = [];

    // Addition
    if(operatorSign == "+"){
        for(i = 0; i < nbrList.length; i++){
            result.push(Addition(nbrList[i], operatorNumber));
        }
        return result;

    // Subtraction    
    }else if(operatorSign == "-"){
        for(i = 0; i < nbrList.length; i++){
            result.push(Subtraction(nbrList[i], operatorNumber));
        }
        return result;
    }
}



function Addition(nbr1, nbr2){
    return parseInt(nbr1) + parseInt(nbr2);
}

function Subtraction(nbr1, nbr2){
    return parseInt(nbr1) - parseInt(nbr2);
}


// Error:


// Parsing:

const path = process.argv;
let inputNumbers = NewArray(path);
let opeSign = path[path.length-1].charAt(0);
let opeNbr = path[path.length-1].substring(1);


// Resolve:

let results = OperationResults(AddOrSub(inputNumbers, opeSign, opeNbr));

// Display:

console.log(results);
