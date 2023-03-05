/////////////// Le roi des tris //////////////


// Functions: 

function createList(inputPath){
    if(IsEnoughArg(inputPath)){
        if(isInt(inputPath)){
            let newList = [];
            for(i = 2; i < inputPath.length; i++){
                let item = parseInt(inputPath[i]);
                newList.push(item);
            }
            return newList;    
        }else{
            return false;
        }
    }else{
        return false;
    }

}


function quickSort(array){
    // If not enough arg or not nbr:
    if(!array){
        return ["Error!"]
    }else{
    // Good list, start of sorting:

        // If list.length or left/rightList.length == 1
        if(array.length < 2){ 
            return array;
        }
        // If list.length or left/rightList.length > 1
        const pivot = array[array.length -1];
        let leftList = [];
        let rightList = [];
    
        for(i = 0; i < array.length -1; i++){
            if(array[i] < pivot){
                leftList.push(array[i]);
            }else{
                rightList.push(array[i]);
            }
        }
        return [...quickSort(leftList), pivot, ...quickSort(rightList)]
    }

}


// Errors:

function IsEnoughArg(inputPath){
    if(inputPath.length > 2){
        return true;
    }else{
        return false;
    }
}

function isInt(list){
    
    for(i = 2; i < list.length; i++){
        let item = list[i];
        for(j = 0; j < item.length; j++){
            // regex: check if is nbr
            let nbr = item.charAt(j).search(/[0-9]/i);
            if(nbr == -1){
                return false;
            }
        }
    }
    return true;
}



// Parsing:
const path = process.argv;
let myList = createList(path);


// Resolve:

myNewList = quickSort(myList);


// Display:

console.log(...myNewList);


