let str = ' I love java & java';

let str2 = str.replace("java", "javascript");
console.log(str2);

let str3 = str.replaceAll("java", "javascript"); 
console.log(str3);

let str4 = "New ChatGPT version is awesome."; 
let position = str4.indexOf("w"); //2
console.log(str4.indexOf('w',str4.indexOf("w")+1));


console.log(str4.indexOf("test")); //-1

console.log(str4.search("version")); //12
console.log(str4.search("test")); //-1

console.log(str4.startsWith("new"));
console.log(str4.startsWith("is"));

console.log(str4.endsWith("Some."));

