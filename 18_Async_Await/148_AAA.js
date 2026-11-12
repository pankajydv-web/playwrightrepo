// An async function always returns a promise.
// await reads the resolved value inside another async function.

async function getTestResults() {
    return "Pass";
}

// getTestResults().then(function (results) {
//     console.log(results);
// });

getTestResults().then(function (results123) {
    console.log(results123);
});
async function runTest() {
    let result = await Promise.resolve("Login test passed");
    console.log(result);

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2);
}

//runTest();

async function runTest2()
{
    let result1 = await Promise.resolve("Login test passed result1");
    console.log(result1);

    let result2 = await Promise.resolve("Login test passed result2");
    console.log(result2);
}
runTest2();