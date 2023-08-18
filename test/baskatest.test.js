const calculator = require("../src/calculator");

describe("Calculator", () => {
  test("Addition", () => {
    expect(calculator.sum(2, 3)).toBe(5);
  });

  test("Subtraction", () => {
    expect(calculator.diff(5, 2)).toBe(3);
  });

  test("Multiplication", () => {
    expect(calculator.product(4, 3)).toBe(12);
  });

  test("Division", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("Division by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("Negative numbers addition", () => {
    expect(calculator.sum(-5, -3)).toBe(-8);
  });

  test("Zero multiplication", () => {
    expect(calculator.product(5, 0)).toBe(0);
  });

  test("Floating point division", () => {
    expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
  });

  test("Large numbers multiplication", () => {
    expect(calculator.product(1000000, 1000000)).toBe(1000000000000);
  });

  test("Mixed operations", () => {
    expect(calculator.sum(2, calculator.product(3, 4))).toBe(14);
  });

  test("Addition with zero operands", () => {
    expect(calculator.sum(0, 0)).toBe(0);
  });

  test("Addition with one zero operand", () => {
    expect(calculator.sum(5, 0)).toBe(5);
    expect(calculator.sum(0, -3)).toBe(-3);
  });

  // Add more test cases here...

});
