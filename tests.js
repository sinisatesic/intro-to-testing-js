// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello("Jane") returns "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('sayHello("Alex") returns "Hello, Alex!"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('sayHello("Pat") returns "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('sayHello() returns "Hello, World!"', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('sayHello(true) returns "Hello, World!"', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('sayHello(false) returns "Hello, World!"', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function(){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return boolean value', function(){
        expect(isFive(5)).toBe(true);
    });
    it('returns true if input is "5"', function(){
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function(){
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('returns boolean value', function(){
        expect(isEven(2)).toBe(true);
    });
    it('should return true if input is 2', function(){
        expect(isEven(2)).toBe(true);
    });
    it('should return true if input is -4', function(){
        expect(isEven(-4)).toBe(true);
    });
    it('should return false if input is 3', function(){
        expect(isEven(3)).toBe(false);
    });
    it('should return false if input is "banana"', function(){
        expect(isEven("banana")).toBe(false);
    });
    it('should return true if input is "8"', function(){
        expect(isEven("8")).toBe(true);
    });
    it('should return false if input is Infinity', function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false if input is boolean input', function(){
        expect(isEven(true) || isEven(false)).toBe(false);
    });
    it('should return false when called without argument', function(){
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function(){
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true if input is "a"', function(){
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if input is "a"', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('should return true if input is "a"', function(){
        expect(isVowel("y")).toBe(false);
    });
    it('should return true if input is "a"', function(){
        expect(isVowel("4")).toBe(false);
    });
    it('should return true if input is "a"', function(){
        expect(isVowel(true || false)).toBe(false);
    });
    it('should return true if input is "a"', function(){
        expect(isVowel("banana")).toBe(false);
    });
    it('should return true if input is "a"', function(){
        expect(isVowel()).toBe(false);
    });
});