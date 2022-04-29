//THIS FILE IS JUST A PLAYGROUND FOR COPY/PASTING CODE TO DEMO TO THE CLASS
//NOTE MAKE SURE YOU REVIEW THE README.MD for information on how to install
//TYPESCRIPT and some of the other required tools to run Node and Typescript
//Effectively
//
// Again, below is just demo1 from the tutorial that we will be following in 
// the reamde.md file.  Just a playground, nothing really useful
//
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws an error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

let data1:string = 'Data1'

//error - string type can not accept number or other data
// data1 = 50; 

// any data type variable can store any type of value, there are no data checking 
let data2:any = 'Data2';
data2 = 50;
data2 = true;

let arrayVar:string[] = ['Hi','Hey','Good','Hello'];

console.log(data2);