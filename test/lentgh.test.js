const kelime = require('../src/length');


describe("kelime Tests", () => {
  test("Conbine two strings", () => {
    var result = kelime.concatenate("Hello", " World");
    // assert
    expect(result).toBe("Hello World");
  });
  test("Length of a string", () => {
    
    var result = kelime.length("Software testing help");
    // toplamı 21, fail vercek
    expect(result).toBe(20);
  });
});