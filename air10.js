////////////// Afficher le contenu ///////////////


// Parsing:

const path = process.argv;
const myFile = path[2];


const fs = require('fs');

function showContent(inputFile) {
    if(inputFile){
        const dataExtraction = fs.readFileSync(myFile, 'utf8', (data) => data);
        return dataExtraction;
    }else{
        return "Error!";
    }
}




// Display:

console.log(showContent(myFile));