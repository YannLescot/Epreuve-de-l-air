//////////////// Sur chacun d'entre eux /////////////////


// Functions:

function NewArray(inputPath){
    let tempArray = [];
    for(i = 2; i < inputPath.length; i++){
        tempArray.push(inputPath[i]);
    }
    return tempArray;
}


function AddOrSub(nbrList, operator, operatorNumber){
    let result = [];

    // Addition
    if(operator == "+"){
        for(i = 0; i < nbrList.length; i++){
            result.push(Addition(nbrList[i], operatorNumber));
        }
        return result;
        
    // Subtraction    
    }else if(operator == "-"){
        for(i = 0; i < nbrList.length; i++){
            result.push(Subtraction(nbrList[i], operatorNumber));
        }
        return result;
    }
}



function Addition(nbr1, nbr2){
    return nbr1 + nbr2;
}

function Subtraction(nbr1, nbr2){
    return nbr1 - nbr2;
}