// ary: number array
function sum(ary) {
	// TODO: sum all elements in ary

    // method 1 : forEach
    /*
    sum = 0;
    ary.forEach((item, index) => {
        sum += item;
    });
    return sum;
    */

    // method 2 : reduce
    /*
    return ary.reduce((sum, item) => sum + item, 0);
    */

    // method 3 : reduceRight
    /*
    return ary.reduceRight((sum, item) => sum + item, 0);
    */

    // method 4 : every
    let sum = 0;
    ary.every(num => (sum += num, true)); // if the "true" is removed, the loop will stop when the sum is equal to 0. That is sum([0, 5, 3, 2]) will return 0.
    return sum;
}

console.log(sum([1, 5, 3, 2])); // 11


function sumOneToN(n){
    // method 1 : math formula
    return (1 + n) * n / 2;

    // method 2 : recursive
    /*
    if (n === 1) return 1;
    return n + sumOneToN(n - 1);
    */
}

console.log(sumOneToN(100)); // 5050