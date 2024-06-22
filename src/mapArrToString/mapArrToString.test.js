const mapArrToString = require("./mapArrToString");


describe ('mapArrToString', () => {
    test("correct value", () => {
        expect(mapArrToString([1,2,3])).toEqual(['1','2','3']);
    });
    test("hodgepodge value", () => {
        expect(mapArrToString([1,2,3,null,[2,33], undefined, NaN])).toEqual(['1','2','3']);
    });
    test("empty arr", () => {
        expect(mapArrToString([])).toEqual([]);
    });
    test("empty arr notEqual", () => {
        expect(mapArrToString([])).not.toEqual([1]);
    });

   
})