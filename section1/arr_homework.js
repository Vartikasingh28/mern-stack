console.log('₹3400');
console.log( parseInt('₹3400'.slice(1)));

let prices =  ['₹3400','₹845', '₹20', '₹940', '₹3700'];
let newPrices = prices.map((p) => {return parseInt(p.slice(1))});
console.log(newPrices);

let nums = [2,3,4,6,9,16,36,35,44];
let perfects = nums.filter( (n) => {return n**0.5 ===parseInt(n**0.5)});
console.log(perfects);
const eleRem = (arr, i) => {
    arr.splice(i, 1);
    return arr;
}
let res = eleRem(nums, 3);
console.log(res);




