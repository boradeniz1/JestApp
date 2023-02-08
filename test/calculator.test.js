const mathOperations = require('../src/calculator');
describe("Calculator Tests", () => {
test("Addition of 2 numbers", () => {
// arrange and act
var result = mathOperations.sum(1,2)
// assert
expect(result).toBe(3);
});
test("Subtraction of 2 numbers", () => {
// arrange and act
var result = mathOperations.diff(10,2)
// assert
expect(result).toBe(8);
});
test("equality matchers", () => {
expect(2*2).toBe(4);
expect(4-2).not.toBe(1);
});
test("Multiplication of 2 numbers", () => {
// arrange and act
var result = mathOperations.product(2,8)
// assert
expect(result).toBe(16);
});
test("Division of 2 numbers", () => {
// arrange and act
var result = mathOperations.divide(24,8)
// assert
expect(result).toBe(3);
});




})