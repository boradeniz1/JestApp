const mathOperations = require('../src/calculator');

test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(
'%i + %i equals %i', (a, b, expected) => {
expect(mathOperations.sum(a, b)).toBe(expected);
},
);

test.each([[1, 1, 0], [-1, 2, -3], [2, 2, 0]])(
'%i - %i equals %i', (a, b, expected) => {
expect(mathOperations.diff(a, b)).toBe(expected);
},
);

test.each([[1, 1, 1], [-1, 2, -2], [2, 2, 4]])(
'%i * %i equals %i', (a, b, expected) => {
expect(mathOperations.product(a, b)).toBe(expected);
},
);

test.each([[1, 1, 1], [-1, 2, -0.5], [2, 2, 1]])(
'%i / %i equals %i', (a, b, expected) => {
expect(mathOperations.divide(a, b)).toBe(expected);
},
);