/////////////// Afficher une pyramide //////////////


// Functions: 

// Array initialization
function newArray(floors){
    let charArray = [];
    for(i = 0; i < floors; i++){
        charArray.push(' ');    
    }
    return charArray;
}




function pyramide(char, floors, myArray){
    if(isNoError(char, floors)){
        let newLine = '';
        let pyrArray = [];

        // build lines
        for(i = 0; i < floors; i++){
            myArray.shift();

            if(i === 0){
                myArray.push(char);
            }else{
                myArray.push(char, char);
            }        
            
            // array -> line
            newLine = '';
            for(const item of myArray){
                newLine += item;
            }
            
            pyrArray.push(newLine);
            // console.log(newLine);
        }
        return pyrArray;
    }
    else{
        return "Error!";
    }
}


function showPyramide(myPyramidArray){
    if(myPyramidArray === "Error!"){
        console.log(myPyramidArray);
    }else{
        for(i = 0; i < myPyramidArray.length; i++){
            console.log(myPyramidArray[i]);
        }
    }

}


// Errors:
function isNoError(inputChar, inputFloors){
    if(inputChar && inputFloors){
        if(inputChar.length == 1 && !isNaN(inputFloors)){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


// Parsing:
const path = process.argv;
const inputChar = path[2];
const inputFloorsNbr = parseInt(path[3]);
const myArray = newArray(inputFloorsNbr);


// Resolve:

let myPyramid = pyramide(inputChar, inputFloorsNbr, myArray);


// Display:

showPyramide(myPyramid);


// 'air13.js' test:

function air13Test(){
    return myPyramid;
}