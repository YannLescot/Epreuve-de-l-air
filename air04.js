//////////////// Un seul à la fois ///////////////


// Functions:

function CompareStringChars(string){
    if(NoError(path)){
        let tempString = string.charAt(0);
        
        for(i = 0; i < string.length -1; i++){

            let char = string.charAt(i);
            let nextChar = string.charAt(i+1);

            if(char != nextChar){
                tempString += nextChar;
            }
        }
        return tempString;
    }else{
        return "Error!";
    }
}


// Error:

function NoError(inputPath){
    if(inputPath.length == 3){
        if(inputPath[2].length >= 2){
            return true;    
        }else{
            return false;
        }
    }else{
        return false;
    }
}



// Parsing:

const path = process.argv
let inputString = path[2];


// Resolve:

let newString = CompareStringChars(inputString);

// Display:

console.log(newString);