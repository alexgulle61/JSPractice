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