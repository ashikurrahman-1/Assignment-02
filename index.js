
// Q.1 - Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
function calculateDifference(x, y) {
    return x - y;
}

// Q.2 - Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(num) {
    if (num % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

// Q.3 - Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
function findMin() {
    let numbers = [4, 5, 6, 2, 9, 7, 1];
    return Math.min(...numbers)
}

// Q.4 - Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

// Q.5 - Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(arr) {
    let sorting = arr.slice().sort((a, b) => b - a);
    return sorting;
}

// Q.6 - Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}


// Q.7 - Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
function countVowels(something) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < something.length; i++) {
        if (vowels.includes(something[i])) {
            count++;
        }
    }
    return count;
}

// Q.8 - Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(numbers) {
    let sum = 0;
    numbers.forEach((element) => sum += element)
    let average = sum / numbers.length;
    return average;
}