const { add, subtract, multiply, divide } = require('../script');
// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

describe('Calculator Test Cases', () => {

    // ---------------- ADDITION ----------------
    test('Add 1', () => {
        expect(add(1,1)).toBe(2);
    });

    test('Add 2', () => {
        expect(add(2,3)).toBe(5);
    });

    test('Add 3', () => {
        expect(add(10,5)).toBe(15);
    });

    test('Add 4', () => {
        expect(add(20,30)).toBe(50);
    });

    test('Add 5', () => {
        expect(add(-5,5)).toBe(0);
    });

    test('Add 6', () => {
        expect(add(-10,-10)).toBe(-20);
    });

    test('Add 7', () => {
        expect(add(100,200)).toBe(300);
    });

    test('Add 8', () => {
        expect(add(0,0)).toBe(0);
    });

    test('Add 9', () => {
        expect(add(7,8)).toBe(15);
    });

    test('Add 10', () => {
        expect(add(50,25)).toBe(75);
    });


    // ---------------- SUBTRACTION ----------------
    test('Sub 1', () => {
        expect(subtract(5,2)).toBe(3);
    });

    test('Sub 2', () => {
        expect(subtract(10,5)).toBe(5);
    });

    test('Sub 3', () => {
        expect(subtract(20,10)).toBe(10);
    });

    test('Sub 4', () => {
        expect(subtract(50,25)).toBe(25);
    });

    test('Sub 5', () => {
        expect(subtract(0,5)).toBe(-5);
    });

    test('Sub 6', () => {
        expect(subtract(-10,-5)).toBe(-5);
    });

    test('Sub 7', () => {
        expect(subtract(100,50)).toBe(50);
    });

    test('Sub 8', () => {
        expect(subtract(9,3)).toBe(6);
    });

    test('Sub 9', () => {
        expect(subtract(8,8)).toBe(0);
    });

    test('Sub 10', () => {
        expect(subtract(70,20)).toBe(50);
    });


    // ---------------- MULTIPLICATION ----------------
    test('Mul 1', () => {
        expect(multiply(2,2)).toBe(4);
    });

    test('Mul 2', () => {
        expect(multiply(3,3)).toBe(9);
    });

    test('Mul 3', () => {
        expect(multiply(5,5)).toBe(25);
    });

    test('Mul 4', () => {
        expect(multiply(10,10)).toBe(100);
    });

    test('Mul 5', () => {
        expect(multiply(2,5)).toBe(10);
    });

    test('Mul 6', () => {
        expect(multiply(-2,5)).toBe(-10);
    });

    test('Mul 7', () => {
        expect(multiply(-3,-3)).toBe(9);
    });

    test('Mul 8', () => {
        expect(multiply(7,0)).toBe(0);
    });

    test('Mul 9', () => {
        expect(multiply(8,2)).toBe(16);
    });

    test('Mul 10', () => {
        expect(multiply(6,6)).toBe(36);
    });


    // ---------------- DIVISION ----------------
    test('Div 1', () => {
        expect(divide(10,2)).toBe(5);
    });

    test('Div 2', () => {
        expect(divide(20,4)).toBe(5);
    });

    test('Div 3', () => {
        expect(divide(9,3)).toBe(3);
    });

    test('Div 4', () => {
        expect(divide(100,10)).toBe(10);
    });

    test('Div 5', () => {
        expect(divide(50,2)).toBe(25);
    });

    test('Div 6', () => {
        expect(divide(7,7)).toBe(1);
    });

    test('Div 7', () => {
        expect(divide(0,5)).toBe(0);
    });

    test('Div 8', () => {
        expect(divide(8,2)).toBe(4);
    });

    test('Div 9', () => {
        expect(divide(81,9)).toBe(9);
    });

    test('Div 10', () => {
        expect(divide(144,12)).toBe(12);
    });

});