const getBalance = require('./account');

test('It does not accept numbers as input', () => {
    expect(getBalance('string')).toBe('invalid input');
});

