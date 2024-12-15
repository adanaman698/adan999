// Declare variables of different types
let str = "Hello, World!";        
let num = 42;                      
let bool = true;                   
let n = null;                      
let undef = undefined;            
let obj = { name: "Alice", age: 25 }; 

// Print the types using typeof
console.log(typeof str);          
console.log(typeof num);           
console.log(typeof bool);        
console.log(typeof n);          
console.log(typeof undef);      
console.log(typeof obj);           

// Convert a string to a number
let strToNum = parseInt("123");    
console.log(typeof strToNum);      
console.log(strToNum);             

let strToFloat = parseFloat("123.45"); 
console.log(typeof strToFloat); 
console.log(strToFloat);         

// Convert a number to a string
let numToStr = num.toString();    
console.log(typeof numToStr);     
console.log(numToStr);           

let numToStrWithParse = parseInt(num.toString()); 
console.log(numToStrWithParse);    

