function max(a, b) {
    return (a > b) ? a : b;
}

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiply(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function findLongestWord(words) {
    return Math.max(...words.map(word => word.length));
}

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

function myFunctionTest(expected, func) {
    return expected === func() ? "TEST SUCCEEDED" : "TEST FAILED.  Expected " + expected + " found " + func();
}

// Test cases
console.log("Expected output of max(20,10) is 20 and  " +
    myFunctionTest(20, function(){ return max(20, 10); }));
console.assert(max(20, 10) === 20, "Test case 1 failed");
console.assert(max(-1, 5) === 5, "Test case 2 failed");
console.assert(max(0, 0) === 0, "Test case 3 failed");

console.log("Expected output of maxOfThree(5,4,44) is 44 and  " +
    myFunctionTest(44, function(){ return maxOfThree(5, 4, 44); }));
console.assert(maxOfThree(5, 4, 44) === 44, "Test case 1 failed");
console.assert(maxOfThree(-1, 5, 0) === 5, "Test case 2 failed");
console.assert(maxOfThree(0, 0, 0) === 0, "Test case 3 failed");

console.log("Expected output of isVowel('a') is true and  " +
    myFunctionTest(true, function(){ return isVowel('a'); }));
console.assert(isVowel('a') === true, "Test case 1 failed");
console.assert(isVowel('b') === false, "Test case 2 failed");
console.assert(isVowel('E') === true, "Test case 3 failed");

console.log("Expected output of sum([1,2,3,4]) is 10 and  " +
    myFunctionTest(10, function(){ return sum([1, 2, 3, 4]); }));
console.assert(sum([1, 2, 3, 4]) === 10, "Test case 1 failed");
console.assert(sum([0, 0, 0]) === 0, "Test case 2 failed");

console.log("Expected output of multiply([1,2,3,4]) is 24 and  " +
    myFunctionTest(24, function(){ return multiply([1, 2, 3, 4]); }));
console.assert(multiply([1, 2, 3, 4]) === 24, "Test case 1 failed");
console.assert(multiply([1, 0, 3]) === 0, "Test case 2 failed");

console.log("Expected output of reverse('gib') is 'big' and  " +
    myFunctionTest('big', function(){ return reverse('gib'); }));
console.assert(reverse('gib') === 'big', "Test case 1 failed");
console.assert(reverse('hello') === 'olleh', "Test case 2 failed");

console.log("Expected output of findLongestWord(['a', 'ab', 'abc']) is 3 and  " +
    myFunctionTest(3, function(){ return findLongestWord(['a', 'ab', 'abc']); }));
console.assert(findLongestWord(['a', 'ab', 'abc']) === 3, "Test case 1 failed");
console.assert(findLongestWord(['long', 'longer', 'longest']) === 7, "Test case 2 failed");

console.log("Expected output of filterLongWords(['apple', 'banana', 'cherry'], 5) is ['banana', 'cherry'] and  " +
    myFunctionTest(['banana', 'cherry'], function(){ return filterLongWords(['apple', 'banana', 'cherry'], 5); }));
console.assert(JSON.stringify(filterLongWords(['apple', 'banana', 'cherry'], 5)) === JSON.stringify(['banana', 'cherry']), "Test case 1 failed");
console.assert(JSON.stringify(filterLongWords(['short', 'tiny', 'minuscule'], 4)) === JSON.stringify(['minuscule']), "Test case 2 failed");
