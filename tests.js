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