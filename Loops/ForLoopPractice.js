/*for(let i = 7; i>=0; i--){
    console.log(i);
}
*/
            // 0            1           2       3       4           5
const names = ["Susan", "Pradeep", "Harry", "Mendy", "Henderson", "Pradeep"];
                //6
/*for(let i=0; i<names.length; i++){
    let str  = names[i];
    console.log(str);
}
    */

//print only names which start with "H" and letter size is more than 5 
for (let i = 0; i<names.length; i++){
    let str = names[i];
    if(str.startsWith("H") && str.length>5){
        console.log(str);
    }
}
//console.log(i); note: Loops local variables do not work outside of the loop 