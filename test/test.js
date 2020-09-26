const { expect } = require('chai');
const controllers = require('../controllers')

describe("File 1", () => {
    it("should add the two given numbers - 1", () => {
        expect(controllers.addNumbers(2,5)).to.equal(7)
    });
    it("should add the two given numbers - 2", () => {
        expect(controllers.addNumbers(2,4)).to.equal(6)
    });
    it("should add the two given numbers - 3", () => {
        expect(controllers.addNumbers(1,9)).to.equal(10)
    });

})