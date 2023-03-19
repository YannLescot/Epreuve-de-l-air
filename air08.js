/////////////// Mélanger 2 tableaux triés //////////////


// Functions: 

function NewArray(inputPath, start, end){
    let tempArray = [];
    for(i = start; i < end; i++){
        tempArray.push(inputPath[i]);
    }
    if(IsEnoughArgList(tempArray)){
        if(IsIntList(tempArray)){
            return tempArray;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


function SortedFusion(array1, array2){
    if(array1 && array2){
        let array3 = [];
        let index = 0; // memorise the 2nd array index  when we break to for loop
                            
        for(i = 0; i < array1.length; i++){
            let item1 = array1[i];
            
            while(index < array2.length){
                let item2 = array2[index];
    
                // item of the 1st array is lower: 
                if(parseInt(item1) < parseInt(item2)){
                    array3.push(item1);
    
                    // if no more items in the 1st array,
                    // push the rest of the 2nd array in the 3rd
                    if( i == array1.length -1){ 
                        for(z = index; z < array2.length; z++){ 
                            array3.push(array2[z]);
                        }
                    }
                    break; // we break to compare the next item of the 1st array
    
                // item of the 1st array is higher:     
                }else{
                    array3.push(item2);
    
                    // if no more items in the 2nd array,
                    // push the rest of the 1st array in the 3rd
                    if( index == array2.length -1){
                        for(z = i; z < array1.length; z++){
                            array3.push(array1[z]);
                        }
                    }
                    index++; // go to the next item of the 2nd array
                }
            }
        }
        return array3;
    }else{
        return "Error!";
    }

}


function ArrayToString(outputArray){
    // to have a string display:

    if(outputArray == "Error!"){
        return outputArray;
    
    }else{
        let tempString = "";
    
        for(i = 0; i < outputArray.length; i++){
            tempString += outputArray[i] + " "; 
        }
        return tempString;
    }
}


// Errors:

function IsEnoughArgList(list){
    if(list.length > 0){
        return true;
    }else{
        return false;
    }
}


function IsIntList(list){
    for(i = 0; i < list.length; i++){
        if(isNaN(list[i])){
            return false;
        }
    }
    return true;
}


// Parsing:

const path = process.argv;
const indexF = path.indexOf("fusion");
let list1 = NewArray(path, 2, indexF);
let list2 = NewArray(path, indexF +1, path.length);



// Resolve:

let list3 = ArrayToString(SortedFusion(list1, list2));


// Display:

console.log(list3);



// 'air13.js' test:

function air13Test(){
    return list3;
}