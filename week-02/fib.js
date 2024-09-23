function fib(n) {
    // method 1 : iterative
    /*
    if (n === 0) return 0;
    if (n === 1) return 1;
    let prev2 = 0;
    let prev1 = 1;
    let answer;
    for (let i = 2; i <= n; i++) {
        answer = prev2 + prev1;
        prev2 = prev1;
        prev1 = answer;
    }
    return answer;
    */

    // method 2 : recursive
    /*
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
    */

    // method 3 : dynamic programming
    if (n === 0) return 0;
    if (n === 1) return 1;
    let fibArr = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[n];
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(10));
console.log(fib(12));
console.log(fib(15));