const validateValue = require("./validateValue");

test("validation of the value", () => {
	expect(validateValue(50)).toBe(true);
});


describe ('validateValue', () => {
    test("correct value", () => {
        expect(validateValue(50)).toBe(true);
    });

    test("more than correct", () => {
        expect(validateValue(150)).toBe(false);
    });

    test("less than correct", () => {
        expect(validateValue(-50)).toBe(false);
    });
    test("the boundary value from top", () => {
        expect(validateValue(100)).toBe(true);
    });

    test("the boundary value from below", () => {
        expect(validateValue(0)).toBe(true);
    });
})