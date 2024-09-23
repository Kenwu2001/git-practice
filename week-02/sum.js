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
    
    return ary.reduceRight((sum, item) => sum + item, 0);
    
}

console.log(sum([1, 5, 3, 2])); // 11