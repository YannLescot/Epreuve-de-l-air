/////////////// Meta exercice //////////////
const colors = require('colors');
const fs = require('fs');
const vm = require('vm');




// Functions: 

///// Tests if the file is here and works /////

function airFilesTests(){

  let counter = 0; 
  
  for(i = 0; i < 13; i++){

    function successCounter(test1, test2){ // Success test counter
      if(test1){
        counter++;
        if(test2){
          counter++;
        }
      }
    }

    // air00 to air09:
    if(i < 10){     

      let exoName = `air0${i}.js`;
      existsTest(exoName);  // File exist?
      inputTest(exoName);  // File works? 
      successCounter(existsTest, inputTest);


    // air10 to air12:  
    }else{          

      let exoName = `air${i}.js`;
      existsTest(exoName);  // File exist?
      inputTest(exoName);  // File works?
      successCounter(existsTest, inputTest);
    }
    
  }

  console.log(`Total success: (${counter}/26)`);
}




// File exists ? : 
function existsTest(fileName){
  if(fs.existsSync(fileName)){
    console.log(`${fileName} (1/2) : ` + `success`.green);
    return true;
  }else{
    console.log(`${fileName} (1/2) : ` + `failure`.red);
  }
}



// File works ? :
function inputTest(fileName){
  let context = null;
  let output = null;
  let expectedOutput = null;
  let airFile = fs.readFileSync(`./${fileName}`, 'utf8');
  let test = false;

  switch(i){

    //////////////////// air00.js ///////////////////
    case 0: 
            context = {           // 1) Give args to the script
              process: {
                argv: ['nd',
                        '/air00.js',
                        "Bonjour les gars"
                      ]
              },
            }; 
            vm.createContext(context); // 2) 
            vm.runInContext(airFile, context); // 3) Run the script with context we build before        
            output = context.air13Test(); // Result 
            expectedOutput = [ 'Bonjour', 'les', 'gars' ]; // Expected result
            test = (output.toString() === expectedOutput.toString()); // 5) We compare Result with Expected result
            
            break;

    
    //////////////////// air02.js ///////////////////        
    case 1:
            context = { 
              process: {
                argv: ['nd',
                      '/air01.js',
                      'Crevette magique dans la mer des étoiles', 
                      'la'
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = [ 'Crevette magique dans ', ' mer des étoiles' ];
            test = (output.toString() === expectedOutput.toString());       

            break;

    
    //////////////////// air02.js ///////////////////        
    case 2:
            context = { 
              process: {
                argv: ['nd',
                      '/air02.js',
                      'je', 
                      'teste',
                      'des',
                      'trucs',
                      ' '
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = 'je teste des trucs ';
            test = (output === expectedOutput);      
               
            break;


    //////////////////// air03.js ///////////////////        
    case 3:
            context = { 
              process: {
                argv: ['nd',
                      '/air03.js',
                      '1', 
                      '2', 
                      '3', 
                      '4',
                      '5', 
                      '4', 
                      '3', 
                      '2', 
                      '1'
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = '5';
            test = (output === expectedOutput);       
                
            break;
      

    //////////////////// air04.js ///////////////////  
    case 4:
            context = { 
              process: {
                argv: ['nd',
                      '/air04.js',
                      'Hello milady,   bien ou quoi ??'
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = 'Helo milady, bien ou quoi ?';
            test = (output === expectedOutput);       
                
            break;     
    

    //////////////////// air05.js ///////////////////
    case 5:
            context = { 
              process: {
                argv: ['nd',
                      '/air05.js',
                      10, 
                      11, 
                      12, 
                      20, 
                      '-5'
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = '5 6 7 15 ';
            test = (output === expectedOutput);       
                
            break;    
    

    //////////////////// air06.js ///////////////////
    case 6:
            context = { 
              process: {
                argv: ['nd',
                      '/air06.js',
                      'Michel', 
                      'Albert', 
                      'Thérèse', 
                      'Benoit', 
                      't'
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = 'Albert Benoit ';
            test = (output === expectedOutput);       
                
            break;     
    
    
    //////////////////// air07.js ///////////////////        
    case 7:        
            context = { 
              process: {
                argv: ['nd',
                      '/air07.js',
                      1, 
                      3, 
                      4, 
                      2
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = '1 2 3 4 ';
            test = (output === expectedOutput);       
                
            break;


    //////////////////// air08.js ///////////////////        
    case 8:        
            context = { 
              process: {
                argv: ['nd',
                      '/air08.js',
                      10, 
                      20, 
                      30, 
                      'fusion', 
                      15, 
                      25, 
                      35 
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = '10 15 20 25 30 35 ';
            test = (output === expectedOutput);       
                
            break;


    //////////////////// air09.js ///////////////////        
    case 9:        
            context = { 
              process: {
                argv: ['nd',
                      '/air09.js',
                      'Michel', 
                      'Albert',
                      'Thérèse', 
                      'Benoit'  
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = 'Albert, Thérèse, Benoit, Michel';
            test = (output === expectedOutput);       
                
            break;       
            
            
    //////////////////// air10.js ///////////////////        
    case 10:       
            context = { 
              process: {
                argv: ['nd',
                      '/air10.js',
                      'baseExosJs.txt',   
                      ],
                env:{}
              },
              require: require
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = fs.readFileSync(`./baseExosJs.txt`, 'utf8');
            test = (output === expectedOutput);       
                
            break;


    //////////////////// air11.js ///////////////////        
    case 11:       
            context = { 
              process: {
                argv: ['nd',
                      '/air11.js',
                      'o',
                      3   
                      ]
              },
            }; 
            vm.createContext(context); 
            vm.runInContext(airFile, context);         
            output = context.air13Test();
            expectedOutput = ['  o',' ooo','ooooo'];
            test = (output.toString() === expectedOutput.toString());       
                
            break;


    //////////////////// air12.js ///////////////////        
    case 12:
            context = {
              process: {
                argv: ['nd',
                       '/air12.js',
                       6,
                       5,
                       4,
                       3,
                       2,
                       1
                      ]
              }
            };
            vm.createContext(context);
            vm.runInContext(airFile, context);
            output = context.air13Test();
            expectedOutput = [ 1, 2, 3, 4, 5, 6 ];
            test = (output.toString() === expectedOutput.toString());

            break;

  }
  
  
  // 6) Display of the Results depending of the comparison:
  if(test){ 
    console.log(`${fileName} (2/2) : ` + `success`.green); // Success
    return true;
  }else{
    console.log(`${fileName} (2/2) : ` + `failure`.red);   // Fail
  }
  
}




/////////////////////////////////////

// Errors:



// Parsing:



// Resolve:

function ExerciseTest(airFile, exNb, argvArr, requireNeeded, exOutArr, toStrNeeded,){
              context = {           // 1) Give args to the script
              process: {
                argv: argvArr[exNb]
              },
                require: requireNeeded ? require : null
            }; 
            vm.createContext(context); // 2) 
            vm.runInContext(airFile, context); // 3) Run the script with context we build before        
            output = context.air13Test(); // Result 
            expectedOutput = exOutArr[exNb]; // Expected result
            test = toStrNeeded ? (output.toString() === expectedOutput.toString()) : (output === expectedOutput)

            break;
}

// Display:


airFilesTests();
