/*
Problem 1: Alphabetical Words in a String
Description: Write a function named sortWords that takes a string as input and returns a new string with the words in alphabetical order.
Suggestions:
    •    Use the .split() method to split the string into an array of words.
    •    Use the .sort() method to order the string alphabetically
    •    Use a loop to reverse the order of the words.
    •    Join the array back into a string with spaces and return it.
Example:
sortWords("Hello world from Javascript"); --> Output: "from Hello Javascript world"
*/
// function sortWords(str){
//     //Split the string into an array of words
//     let wordsArray = str.split(" ");

//     for(each of wordsArray){
//         each.toLowerCase();
//     }
    //Sort the elements alphabetically
   // wordsArray.sort();

    //Return array back to string
    //let str2 = wordsArray.toString(" "); 
    //You cannot manipulate how you combone elements of array. toString() method combines elements with comma

   // let str2 = wordsArray.join(" ");

//     return wordsArray; 
// }

// console.log(sortWords("Hello world from Javascript"));

/*
Problem 2: Find the Longest Word
Description: Write a function named findLongestWord that takes an array of strings as input and returns the longest word in the array. If there are multiple words with the same length, return the first one.
Requirements:
    •    Use a loop to iterate through the array of words.
    •    Use the .length property to find the longest word.
    •    Return the longest word found.
Example:
findLongestWord(["apple",  "banana",  "grapefruit", "pear"]); // Output: "grapefruit"
*/

// function findLongestWord(str){
//     let longestWord = ""; 

//     for (let i = 0; i<str.length; i++){
//         if(str[i].length > longestWord.length){   // 10, 4 = > longestWord = grapefruit 
//             longestWord = str[i];
//         }
//     } 
//     return longestWord; 
// }
// console.log("Longest word: " + findLongestWord(["apple",  "banana",  "grapefruit", "pear"]))

// function findLongersWord(inputString){
//     for( i=0; i<inputString.length; i++){
//         if(inputString[i].length > inputString[i+1].length){
//             //grapefruit                    jackfruitsy
//             console.log ("word: " + inputString[i])
//             return inputString[i];
//         }
//     }
//     }
//     let longestWord = findLongersWord(["apple",  "banana",  "pear", "jackfruitsy", "hello", "from", "grapefruit",]);
//     console.log("the longest word is:" + longestWord); //grapefruit

    // function findLongestWord(inputString) {
    //     for (let i = 0; i < inputString.length; i++) {
    //         console.log ("word: " + inputString[i])
    //         if (inputString[i].length > inputString[i + 1].length) {
    //             //console.log ("word: " + inputString[i])
    //             return inputString[i];
    //         }
    //     }
    // }
    // let longestWordNew = findLongestWord(["apple", "banana", "grapefruit", "pear", "pineappleJackFruit"]);
    // console.log("Longest word is : " + longestWordNew);

/*
Problem 3: Filter Even Numbers from an Array
Description: Write a function named filterEvenNumbers that takes an array of numbers as input 
and returns a new array containing only the even numbers from the original array.
Suggestions:
    •    Use a loop to iterate through the array of numbers.
    •    Use the modulus operator (%) to check if a number is even.
    •    If a number is even, add it to a new array.
    •    Return the new array of even numbers.
Example: 
filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);   // Output: [2, 4, 6, 8, 10]
*/

// function filterEvenNumbers(numbers){
//     let evenNumbers = []; //Initialize an empty array for even numbers

//     for(let i = 0; i<numbers.length; i++){
//         //check if the number is even
//         if(numbers[i] % 2 === 0){
//             evenNumbers.push(numbers[i]); //Add even numbers to the new array
//         }
//     }
//     return evenNumbers;
// }

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])); 

/*
Problem 4: Capitalize the Whole Word if Word Length is Greater Than 4
Description: Write a function named capitalizeLongWords that takes a string as input 
and returns a new string where every word with a length greater than 4 is fully capitalized.
Suggestions:
    •    Use the .split() method to split the string into an array of words.
    •    Use a loop to iterate through the array of words.
    •    For each word, check if its length is greater than 4.
    •    If it is, capitalize the entire word.
    •    Use the .join() method to join the array back into a string and return it.
Example: 
capitalizeLongWords("javascript is fun to learn");
// Output: "JAVASCRIPT is fun to LEARN"
*/

function capitalizeLongWords(str){
    let wordArray = str.split(", "); //convert to array -> ["javascript", " is", " fun", " to", " learn"]

    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > 4){
            wordArray[i] = wordArray[i].toUpperCase();
        }
    }
    let capitalizedString = wordArray.join(", "); //convert back to string from array

    return capitalizedString;
}

console.log(capitalizeLongWords("javascript, is, fun, to, learn")); //JAVASCRIPT is fun to LEARN


// String = "Chris, Steven, John, Robert"; 
// out = "C, J, R, S" 
        // array 
        // split(", " )
        // sort();
        // join(", ")

