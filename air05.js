//////////////// Sur chacun d'entre eux /////////////////


// Functions:

function NewArray(inputPath){
    let tempArray = [];
    for(i = 2; i < inputPath.length -1; i++){
        tempArray.push(inputPath[i]);
    }
    return tempArray;
}



function AddOrSub(nbrList, operatorSign, operatorNumber){
    if(enoughArg(path) && isNumberArray(nbrList)){
        if(isSign(operatorSign) && isSignNumber(operatorNumber)){
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
        }else{
            return "Error!"
        }
    }else{
        return "Error!";
    }
}



function Addition(nbr1, nbr2){
    return parseInt(nbr1) + parseInt(nbr2);
}

function Subtraction(nbr1, nbr2){
    return parseInt(nbr1) - parseInt(nbr2);
}



function OperationResults(resultArray){
    if(resultArray == "Error!"){
        
        return resultArray;

    }else{
        let tempResult = "";

        for(i = 0; i < resultArray.length; i++){
            tempResult += resultArray[i] + " ";
        }

        return tempResult;
    }
}


// Error:

function enoughArg(inputPath){
    if(inputPath.length >= 4){
        return true;
    }else{
        return false;
    }
}

function isNumberArray(inputNbrArray){
    for(i = 0; i < inputNbrArray; i++){
        if(!isNaN(inputNbrArray[i])){
            return true;
        }else{
            return false;
        }
    }
}


function isSign(sign){
    if(sign == "+" || sign == "-"){
        return true;
    }else{
        return false;
    }
}


function isSignNumber(opeNumber){
    for(i = 0; i < opeNumber.length; i++){
        if(isNaN(opeNumber.indexOf(i))){
            return false;
        }
    }
    return true;
}

 

// Parsing:

const path = process.argv;
let inputNumbers = NewArray(path);
let opeSign = path[path.length-1].charAt(0);
let opeNbr = path[path.length-1].substring(1);


// Resolve:

let results = OperationResults(AddOrSub(inputNumbers, opeSign, opeNbr));

// Display:

console.log(results);

