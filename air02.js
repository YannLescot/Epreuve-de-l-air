///////////////// Concat ////////////////


// Functions:

function CreateArray(arrayInput){
    if(NoError(arrayInput)){
        let newArray = [];

        for(i = 2; i < arrayInput.length; i++){
            newArray.push(arrayInput[i]);
        }
    
        return newArray;
    }else{
        return "Error!";
    }
}


function Concat(array, separator){
    if(array == "Error!"){
        return array;
    }else{
        let string = "";
    
        for(i = 0; i < array.length -1; i++){
            string += array[i] + separator;
        }

        return string;
    }
}


function ShowString(string){
    console.log(string);
}


// Error:

function NoError(arrayInput){
    if(arrayInput.length >= 4){
        return true;
    }else{
        return false;
    }
}




// Parsing:

const pathArray = process.argv;
let stringArray = CreateArray(pathArray);
let separatorInput = stringArray[stringArray.length -1];


// Resolve:

let newString = Concat(stringArray, separatorInput);


// Display:

ShowString(newString);


// 'air13.js' test:

function air13Test(){
    return newString;
}