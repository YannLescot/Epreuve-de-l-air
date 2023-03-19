////////////// Afficher le contenu ///////////////


// Parsing:

const path = process.argv;
const myFile = path[2];
console.log(process.env);


// const fs = require('fs');

function showContent(inputFile) {
    const fs = require('fs');
    if(fs.existsSync(`./${inputFile}`)){ 
        const dataFile = fs.readFileSync(`./${inputFile}`, 'utf8');
        return dataFile;
    }else{
        return "Error!";
    }
}




// Display:

let fileContent = showContent(myFile);

console.log(fileContent);



// 'air13.js' test:

function air13Test(){
    return fileContent;
}