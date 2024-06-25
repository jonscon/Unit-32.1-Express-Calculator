const { findMean, findMedian, findMode } = require('./helpers');

describe("findMean", function() {
    it("finds the mean of an empty array", function() {
        expect(findMean([])).toEqual(NaN)
    })
    it("finds the mean of an array", function() {
        expect(findMean([1, 2, 3, 4])).toEqual(2.5)
    })
})

describe("findMedian", function() {
    it("finds the median of an even set", function() {
        expect(findMedian([1, 2, 3, 4])).toEqual(2.5)
    })
    it("finds the median of an odd set", function() {
        expect(findMedian([1, 2, 3, 4, 5])).toEqual(3)
    })
})

describe("findMode", function() {
    it("finds the mode of an array", function() {
        expect(findMode([1, 1, 2, 2, 3, 3, 3, 4, 5])).toEqual(3)
    })
})