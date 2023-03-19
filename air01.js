///////////////// Split en fonction ////////////////

// Functions:

function Split(text, separator){ // Split text input with separator input

    if(NoError()){  // If text/separator input
        let newText = text;
        let sepIndex = newText.search(separator);
        let sepLength = separator.length;
        let array = [];
        let word = "";
        let end = false;

        do{
            if(sepIndex != -1){ // split if there is separator
                word = newText.substring(0, sepIndex);
                array.push(word);
                newText = newText.substring(sepIndex + sepLength);
                sepIndex = newText.search(separator);
            }else if(sepIndex == -1){ // end split if no separator
                word = newText;
                array.push(word);
                end = true;
            } 
        }while(!end)

        return array;

    }else{ // If no text/separator input
        return "Error!"
    }
    
}


function ShowSplitText(splitTextArray){ // Display array items
    if(splitTextArray == "Error!"){ 
        console.log("Error!");
    }else{
        for(i = 0; i < splitTextArray.length; i++){ 
            console.log(splitTextArray[i]); 
        }
    }
    
}


// Error:

function NoError(){ // Check text + separator (2 arg)
    if(path.length != 4 ){
        return false;
    }else{
        return true;
    }
}


// Parsing:

const path = process.argv;
const inputText = path[2];
const separator = path[3];


// Resolve:

let textArray = Split(inputText, separator);


// Display:

ShowSplitText(textArray);


// 'air13.js' test:

function air13Test(){
    return textArray;
}