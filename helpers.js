/** 
 *  Attempt to convert a comma-separated list of strings to an array of numbers.
*/

function convertAndValidateArray(numsAsStrings) {
    let numsArray = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        // Convert string to number
        let stringToNum = Number(numsAsStrings[i]);

        // Throw error if the converted string is not a number
        if (Number.isNaN(stringToNum)) {
            return new Error(
                `The value ${numsAsStrings[i]} at index ${i} is not a number.`
            )
        }
        numsArray.push(stringToNum);
    }
    return numsArray;
}

/**
 * Mean Function
 */

function findMean(numsArray) {
    // Add up nums
    let sum = 0;
    numsArray.forEach(num => {
        sum += num;
    })

    return sum / numsArray.length;
}

/**
 * Median Function
 */
function findMedian(numsArray) {
    // Sort array with callback func a - b
    numsArray.sort((a, b) => a - b);

    let median;
    let mid = numsArray.length / 2;

    // If array is of even length, the mdeian is the mean of the two middle numbers
    if (numsArray.length % 2 === 0) {
        median = (numsArray[mid - 1] + numsArray[mid]) / 2;
    }
    // Else, the median is the middle number
    else {
        median = numsArray[Math.floor(mid)];
    }

    return median;
}

/**
 * Mode Function
 */

function findMode(numsArray) {
    // Count the frequency of each number, storing the number as the key and the frequency as the value
    let freqCounter = numsArray.reduce((counter, next) => {
        counter[next] = (counter[next] || 0) + 1;
        return counter;
    }, {});

    let count = 0;
    let mostFrequent;
    
    // Go through counter object, checking which number has the most occurences
    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }

    return +mostFrequent;
}

module.exports = {
    convertAndValidateArray,
    findMean,
    findMedian,
    findMode
};