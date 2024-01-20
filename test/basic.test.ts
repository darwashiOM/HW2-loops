import {addition} from '../src/basic';

describe('addition function', () => {
    test('(1 pts) Positive Numbers', () => {
        expect(addition(1, 2, 3)).toEqual(6);
        expect(addition(6, 4, 5)).toEqual(15);
    });

    test('(1 pts) Negative Numbers', () => {
        expect(addition(-1, -2, -3)).toEqual(-6);
        expect(addition(-6, -4, -5)).toEqual(-15);
    });

    test('(1 pts) Mixed Numbers', () => {
        expect(addition(1, -2, 3)).toEqual(2);
        expect(addition(-6, 4, -5)).toEqual(-7);
    });

    test('(1 pts) Zeros', () => {
        expect(addition(0, 0, 0)).toEqual(0);
    });
});