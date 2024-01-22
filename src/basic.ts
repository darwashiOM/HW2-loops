/**
 * Converts a temperature in Celsius to Fahrenheit using the formula F = (C * 9 / 5) + 32.
 * @param celsius A temperature in Celsius
 * @returns The temperature in Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
    return 0;
}

/**
 * Adds two numbers together only if they are positive numbers. If either number is negative, return 0.
 * @param a A number
 * @param b Another number
 * @returns The sum of the numbers, if they were both positive. Otherwise, returns 0.
 */
export function addIfPositive(a: number, b: number): number {
    return 0;
}

/**
 * Returns the absolute difference between a and b (|a - b|). So difference(10, 5) === 5 and difference(5, 10) === 5.
 * @param a A number
 * @param b Another number
 * @returns The difference between a and b
 */
export function difference(a: number, b: number): number {
    return 0;
}

/**
 * Calculates the area of a circle with the given radius.
 * @param radius The radius of the circle
 * @returns The area of the circle
 */
export function circleArea(radius: number): number {
    return 0;
}


/**
 * Given the current temperature and the weather, returns what you should wear.
 * If it's sunny and over 70 degrees, return 't-shirt'.
 * If it's over 50 degrees, return 'sweater'.
 * Otherwise, return 'jacket'.
 * @param temperature 
 * @param weather 
 * @returns 
 */
export function whatToWear(temperature: number, weather: string): string {
    return "";
}

/**
 * Given a grade, returns either "failing" or "passing" depending on if
 * the grade is an A, B, C (passing) or D, F (failing). No other grades
 * will be passed in.
 * 
 * @param grade 
 * @returns 
 */
export function getGradeMessage(grade: string): string {
    return "";
}

/**
 * Given a time in the format HH:MM, returns the number of minutes since midnight.
 * There are 60 minutes in an hour, so 1:00 is 60, 2:30 is 150, etc.
 * 
 * @param time A time in the format HH:MM
 * @returns The number of minutes since midnight
 */
export function parseTime(time: string): number {
    return 0;
}

/**
 * Converts a word to Pig Latin. If the word starts with a vowel, add "ay" to the end.
 * Otherwise, move the first letter to the end, and add "ay".
 * @param word 
 * @returns 
 */
export function pigLatin(word: string): string {
    return "";
}

/**
 * Given a word and a phrase, return the phrase with the first word removed.
 * Remove any extra spaces at the beginning of the phrase, after removing the word.
 * If the phrase does not start with the word, return the phrase unchanged.
 * @param phrase A phrase
 * @returns The phrase with the first word removed
 */
export function chompString(word: string, phrase: string): string {
    return "";
}