// Example of Synchronous Computation
function calculateFactorialSync(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorialSync(n - 1);
}

function performSyncTask() {
    console.log('Calculating factorial synchronously...');
    const result = calculateFactorialSync(10); // Synchronous computation
    console.log('Factorial calculated:', result);
    console.log('Task completed.');
}

// Calling the function
performSyncTask();

console.log('This will log after the synchronous task is completed.');

// Example of Asynchronous Computation using async and await
async function calculateFactorialAsync(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    // Simulate async work by wrapping it in an async function
    return n * await calculateFactorialAsync(n - 1);
}

async function performAsyncTask() {
    console.log('Calculating factorial asynchronously...');
    const result = await calculateFactorialAsync(10); // Asynchronous computation
    console.log('Factorial calculated:', result);
    console.log('Task completed.');
}

// Calling the async function
performAsyncTask();

console.log('This will log immediately, before the asynchronous task is completed.');