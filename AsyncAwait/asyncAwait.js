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