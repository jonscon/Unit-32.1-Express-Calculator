const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const {convertAndValidateArray, findMean, findMedian, findMode} = require('./helpers');

// Allow Express to parse request bodies for JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', function(req, res, next) {
    // Check if empty input
    if (!req.query.nums) {
        throw new ExpressError("You must pass a query of comma-separated numbers.", 400);
    }

    // Split up query into an array
    const {nums} = req.query;
    let numsAsStringsArray = nums.split(',');

    // Validate that array is all numbers
    let numsArray = convertAndValidateArray(numsAsStringsArray);
    if (numsArray instanceof Error) {
        throw new ExpressError(numsArray.message);
    }

    let result = {
        operation : 'mean',
        value: findMean(numsArray)
    };

    return res.send(result);
})

app.get('/median', function(req, res) {
    // Check if empty input
    if (!req.query.nums) {
        throw new ExpressError("You must pass a query of comma-separated numbers.", 400);
    }

    // Split up query into an array
    const {nums} = req.query;
    let numsAsStringsArray = nums.split(',');

    // Validate that array is all numbers
    let numsArray = convertAndValidateArray(numsAsStringsArray);
    if (numsArray instanceof Error) {
        throw new ExpressError(numsArray.message);
    }

    let result = {
        operation : 'median',
        value: findMedian(numsArray)
    };

    return res.send(result);
})

app.get('/mode', function(req, res) {
    // Check if empty input
    if (!req.query.nums) {
        throw new ExpressError("You must pass a query of comma-separated numbers.", 400);
    }

    // Split up query into an array
    const {nums} = req.query;
    let numsAsStringsArray = nums.split(',');

    // Validate that array is all numbers
    let numsArray = convertAndValidateArray(numsAsStringsArray);
    if (numsArray instanceof Error) {
        throw new ExpressError(numsArray.message);
    }

    let result = {
        operation : 'mode',
        value: findMode(numsArray)
    };

    return res.send(result);
})

/**
 * General Error Handler
 */

app.use(function(req, req, next) {
    const err = new ExpressError("Page Not Found", 404);

    // Pass the error to the next piece of middleware
    return next(err);
})

/**
 * General Error Handler
 */

app.use(function(err, req, res, next) {
    // Default error is 500
    let status = err.status || 500;
    let message = err.message;

    // Set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    })
})

app.listen(3000, function () {
    console.log('App on port 3000');
  })