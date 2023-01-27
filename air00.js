///////////////// Split ////////////////

// Functions:

function Split(text, separator){
    let array = [];
    let word = "";

    if(NoError(inputText)){  // If has text input
        for(i = 0; i < text.length; i++){
            let letter = text.charAt(i);

            if(letter != separator){ 
                // Add char to word
                word += letter;
                if(i == text.length -1){
                    array.push(word);
                }
            }else if(letter == separator && word != ""){ 
                // Add word to array
                array.push(word);
                word = "";
            }
        }
    }else{ // If has no text input
        return "Error!"
    }

    return array;
}


function ShowSplitText(splitTextArray) {
    if(splitTextArray == "Error!"){ 
        console.log("Error!");
    }else{
        // Display array items
        for(i = 0; i < splitTextArray.length; i++){ 
            console.log(splitTextArray[i]); 
        }
    }
    
}

// Error:

function NoError(text){
    if(text === undefined){
        return false;
    }else{
        return true;
    }
}


// Parsing:

const inputText = process.argv[2];


// Resolve:

let textArray = Split(inputText, " ");

// Display:

ShowSplitText(textArray);