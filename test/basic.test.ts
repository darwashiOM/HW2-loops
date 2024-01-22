import {difference, celsiusToFahrenheit, whatToWear, pigLatin, getGradeMessage, circleArea, 
    parseTime, addIfPositive, chompString} from '../src/basic';

describe('celsiusToFahrenheit function', () => {
    test('0 degrees celsius is 32 degrees fahrenheit', () => {
        expect(celsiusToFahrenheit(0)).toEqual(32);
    });

    test('100 degrees celsius is 212 degrees fahrenheit', () => {
        expect(celsiusToFahrenheit(100)).toEqual(212);
    });

    test('-40 degrees celsius is -40 degrees fahrenheit', () => {
        expect(celsiusToFahrenheit(-40)).toEqual(-40);
    });
});

describe('addIfPositive function', () => {
    test('both positive', () => {
        expect(addIfPositive(1, 2)).toEqual(3);
    });

    test('both negative', () => {
        expect(addIfPositive(-1, -2)).toEqual(0);
    });

    test('one positive, one negative', () => {
        expect(addIfPositive(1, -2)).toEqual(0);
    });

    test('both zero', () => {
        expect(addIfPositive(0, 0)).toEqual(0);
    });
});

describe('difference function', () => {
    test('(1 pts) Positive Numbers', () => {
        expect(difference(1, 2)).toEqual(1);
        expect(difference(6, 4)).toEqual(2);
    });

    test('(1 pts) Negative Numbers', () => {
        expect(difference(-1, -2)).toEqual(1);
        expect(difference(-6, -4)).toEqual(2);
    });

    test('(1 pts) Mixed Numbers', () => {
        expect(difference(1, -2)).toEqual(3);
        expect(difference(-6, 4)).toEqual(10);
    });

    test('(1 pts) Zeros', () => {
        expect(difference(0, 0)).toEqual(0);
    });
});

describe('circleArea function', () => {
    test('radius 1', () => {
        expect(circleArea(1)).toEqual(Math.PI);
    });

    test('radius 2', () => {
        expect(circleArea(2)).toEqual(4 * Math.PI);
    });

    test('radius 3', () => {
        expect(circleArea(3)).toEqual(9 * Math.PI);
    });
});

describe('whatToWear function', () => {
    test('warm and sunny', () => {
        expect(whatToWear(80, 'sunny')).toEqual('t-shirt');
    });

    test('warm and not sunny', () => {
        expect(whatToWear(80, 'cloudy')).toEqual('sweater');
    });

    test('cold and sunny', () => {
        expect(whatToWear(40, 'sunny')).toEqual('jacket');
    });

    test('cold and not sunny', () => {
        expect(whatToWear(40, 'cloudy')).toEqual('jacket');
    });

    test('middle and sunny', () => {
        expect(whatToWear(60, 'sunny')).toEqual('sweater');
    });

    test('middle and not sunny', () => {
        expect(whatToWear(60, 'cloudy')).toEqual('sweater');
    });
});

describe('getGradeMessage function', () => {
    test('D or F', () => {
        expect(getGradeMessage('D')).toEqual('failing');
        expect(getGradeMessage('F')).toEqual('failing');
    });

    test('A, B, C', () => {
        expect(getGradeMessage('A')).toEqual('passing');
        expect(getGradeMessage('B')).toEqual('passing');
        expect(getGradeMessage('C')).toEqual('passing');
    });
});

describe('parseTime function', () => {
    test('midnight', () => {
        expect(parseTime('00:00')).toEqual(0);
    });

    test('1am', () => {
        expect(parseTime('01:00')).toEqual(60);
    });

    test('noon', () => {
        expect(parseTime('12:00')).toEqual(12 * 60);
    });

    test('1pm', () => {
        expect(parseTime('13:00')).toEqual(13 * 60);
    });

    test('11:59pm', () => {
        expect(parseTime('23:59')).toEqual(23 * 60 + 59);
    });
});

describe('pigLatin function', () => {
    test('starts with vowel', () => {
        expect(pigLatin('apple')).toEqual('appleay');
        expect(pigLatin('elephant')).toEqual('elephantay');
    });

    test('starts with consonant', () => {
        expect(pigLatin('banana')).toEqual('ananabay');
        expect(pigLatin('dog')).toEqual('ogday');
    });

    test('starts with multiple consonants', () => {
        expect(pigLatin('cherry')).toEqual('herrycay');
        expect(pigLatin('three')).toEqual('hreetay');
    });

    test('starts with a y', () => {
        expect(pigLatin('yellow')).toEqual('ellowyay');
        expect(pigLatin('yes')).toEqual('esyay');
    });
});

describe('chompString function', () => {
    test('chomp empty string', () => {
        expect(chompString('', 'hello')).toEqual('hello');
    });

    test('chomp string', () => {
        expect(chompString('hello', 'hello world')).toEqual('world');
        expect(chompString('goto', 'goto space')).toEqual('space');
        expect(chompString('exit', 'exit')).toEqual('');
    });

    test('chomp string with no match', () => {
        expect(chompString('hello', 'goodbye world')).toEqual('goodbye world');
        expect(chompString('open', 'close the door')).toEqual('close the door');
    });
});