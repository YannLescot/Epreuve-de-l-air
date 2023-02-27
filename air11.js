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
    if(isError(char, floors)){
        let newLine = '';

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
            console.log(newLine); ;
        }
    }
    else{
        console.log("Error!");
    }
}



// Errors:
function isError(inputChar, inputFloors){
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

// Resolve/ Display:
let myPyramid = pyramide(inputChar, inputFloorsNbr, myArray);


