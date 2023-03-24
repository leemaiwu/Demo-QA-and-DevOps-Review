function sum(num1, num2) {
    return parseInt(num1) + parseInt(num2)
}

test('check if the sum() function adds two numbers together', () => {
    expect(sum(2, 2)).toBe(4)
})

describe('Check if the sum function ', () => {
    test('returns a number when two number-like arguments are given', () => {
        expect(typeof sum(2, 2)).toBe('number')
        expect(typeof sum('2ft', '2ft')).toBe('number')
    })

    test('return Nan when either of the arguments is not a number or cannot be converted with parseInt to a number', () => {
        expect(sum('blah', 2)).toBeNaN()
        expect(sum('fdsfdsa', 'fdsafdsa')).toBeNaN()
    })
})

