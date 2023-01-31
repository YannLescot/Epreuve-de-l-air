///////////// Chercher l'intrus //////////////


// Functions:

function CreateArrayList(pathArray){
    if(NoError(pathArray)){
        let arrayTemp = [];

        for(i = 2; i < pathArray.length; i++){
            arrayTemp.push(pathArray[i]);
        }
        return arrayTemp;
    }else{
        return false;
    }
}



function ShowIntruder(intruder){
    console.log(intruder);
}



function FindIntruder(inputArray){
    if(inputArray){
        let intruderList = [];
        let prvArrayItems = [];
        let lastItem = inputArray[inputArray.length -1];
        
        // here we compare one item of the list with the next
        for(i = 0; i < inputArray.length -1; i++){
            let isSame = 0;
            let firstItem = inputArray[i];    

            for(j = i+1; j < inputArray.length; j++){
                let secondItem = inputArray[j];
                
                if(firstItem == secondItem){
                    isSame++;
                }
            }
            // Intruder possibilities:
            // Only one time occurence
            if(isSame == 0 && !InPrvItems(firstItem, prvArrayItems)){
                intruderList.push(firstItem);
            // More than 2 times    
            }else if(isSame > 1){
                intruderList.push(firstItem);
            }

            prvArrayItems.push(firstItem);
        }
        // here we manage the last item of the list(it can be the intruder):
        if(!InPrvItems(lastItem, prvArrayItems)){
            intruderList.push(lastItem);
        }
        // if only one intruder:
        if(intruderList.length == 1){
            return intruderList[0];
        // if more than 1 or nothing:    
        }else{
            return "Error!";
        }
    }else{
        return "Error!";
    }
}


 
function InPrvItems(item, ArrayItems){
    let counter = 0;

    // verifying if is in the previous list items already checked:
    
    for(i = 0; i < ArrayItems.length; i++){
        if(item == ArrayItems[i]){
            counter++
        }
    }

    if(counter > 0){
        return true;
    }else{
        return false;
    }
}


// Error:

function NoError(array){
    if(array.length >= 5){
        return true;
    }else{
        return false;
    }
}


// Parsing:

const path = process.argv;
let newArray = CreateArrayList(path);

// Resolve:

let intruder = FindIntruder(newArray);


// Display:

ShowIntruder(intruder);