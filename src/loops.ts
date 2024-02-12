/**
 * Complete the following problems using loops and arrays.
 */

/**
 * Given an array of numbers, return their sum. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The sum of all numbers in the array
 */
export function summate(nums: number[]): number {
    let total: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

/**
 * Given an array of numbers, return their average. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The average of all numbers in the array
 */
export function average(nums: number[]): number {
    let total: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return nums.length !== 0 ? total / nums.length : 0;
}

/**
 * Given an array of numbers, divide each number by 2.
 * @param nums An array of numbers
 * @returns The array of numbers divided by 2
 */
export function halve(nums: number[]): number[] {
    let newArray = [];
    for (let i: number = 0; i < nums.length; i++) {
        newArray.push(nums[i] / 2);
    }
    return newArray;
}

/**
 * Given an array of numbers, return only the positive numbers.
 * @param nums An array of numbers
 * @returns An array of only positive numbers
 */
export function onlyPositives(nums: number[]): number[] {
    let newArray = [];
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            newArray.push(nums[i]);
        }
    }
    return newArray;
}

/**
 * Given an array of numbers, return the average of only the positive numbers.
 * @param nums An array of numbers
 * @returns The average of only the positive numbers
 */
export function averagePositives(nums: number[]): number {
    let total: number = 0;
    let length: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        nums[i] > 0 ? (total += nums[i]) : length++;
    }
    return length !== nums.length ? total / (nums.length - length) : 0;
}

/**
 * Given an array of strings, return only the strings that end with 's'.
 * @param words An array of strings
 * @returns An array of only strings that end with 's'
 */
export function getPlurals(words: string[]): string[] {
    let newArray: string[] = [];
    let useless: number = 0;
    for (let i: number = 0; i < words.length; i++) {
        words[i].charAt(words[i].length - 1) == "s" ?
            newArray.push(words[i])
        :   useless++;
    }
    return newArray;
}

/**
 * Given an array of strings, return the first string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * @param words An array of strings
 * @returns The first string that ends with 's'
 */
export function firstPlural(words: string[]): string {
    for (let i: number = 0; i < words.length; i++) {
        if (words[i].charAt(words[i].length - 1) === "s") {
            return words[i];
        }
    }
    return "";
}

/**
 * Given an array of numbers and a threshold number, increase all values in the array by 1 if they are less than the threshold.
 * @param nums An array of numbers
 * @param threshold A threshold number
 * @returns The array of numbers with values less than the threshold increased by 1
 */
export function growIfSmall(nums: number[], threshold: number): number[] {
    let newArray: number[] = [];
    for (let i: number = 0; i < nums.length; i++) {
        nums[i] < threshold ?
            newArray.push(nums[i] + 1)
        :   newArray.push(nums[i]);
    }
    return newArray;
}

/**
 * Given an array of strings, return the longest string.
 * If the array is empty, return an empty string.
 * If there is a tie, return the first longest string.
 * @param words An array of strings
 * @returns The longest string
 */
export function longestString(words: string[]): string {
    let answer: string = "";
    for (let i: number = 0; i < words.length; i++) {
        if (words[i].length > answer.length) {
            answer = words[i];
        }
    }
    return answer;
}

/**
 * Given an array of strings, return the longest string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * If there is a tie, return the first longest plural string.
 * @param words An array of strings
 * @returns The longest string that ends with 's'
 */
export function longestPlural(words: string[]): string {
    let answer: string = "";
    for (let i: number = 0; i < words.length; i++) {
        if (
            words[i].length > answer.length &&
            words[i].charAt(words[i].length - 1) === "s"
        ) {
            answer = words[i];
        }
    }
    return answer;
}

/**
 * Given two arrays of numbers, add the numbers at each index together and return a new array of the sums.
 * If the arrays are different lengths, use the longer array's length and use zero for the missing values
 * in the smaller array.
 * @param nums1 An array of numbers
 * @param nums2 An array of numbers
 * @returns An array of the sums of the numbers at each index
 */
export function addPairs(nums1: number[], nums2: number[]): number[] {
    let newArray: number[] = [];
    if (nums1.length > nums2.length) {
        for (let i: number = 0; i < nums1.length; i++) {
            if (i > nums2.length - 1) {
                newArray.push(nums1[i]);
            } else {
                newArray.push(nums2[i] + nums1[i]);
            }
        }
    } else {
        for (let i: number = 0; i < nums2.length; i++) {
            if (i > nums1.length - 1) {
                newArray.push(nums2[i]);
            } else {
                newArray.push(nums2[i] + nums1[i]);
            }
        }
    }
    return newArray;
}
