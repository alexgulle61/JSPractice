    function findLongestWord(inputString) {
        for (let i = 0; i < inputString.length; i++) {
            if (inputString[i].length > inputString[i + 1].length) {
                return inputString[i];
            }
        }
    }
    let longestWordNew = findLongestWord(["apple", "banana", "grapefruit", "pear", "pineappleJackFruit"]);
    console.log("Longest word is : " + longestWordNew);