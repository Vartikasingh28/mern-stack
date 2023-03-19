let nums = [11, 33, 64, 31 ,88, 52];
// window shift s to ytake ss
for(let i=0; i<nums.length; i++){
if(nums[i]% 2==0){
    console.log(nums[i]);
}
}
console.log('---------\n');

let newArr = [];
// for each loop : for-of loop
for(let n of nums){
    if(n%2==0){
        console.log(n);
        newArr.push(n)
    }
}
console.log(newArr);
// filtering in array 

let res = nums.filter((n)=> { return n%2==0});
console.log(res);

let res2 = nums.map( (a) => {return a*2});
console.log(res2);
const prices =[1200, 350, 3250, 5890, 3990];
let res3 = prices.map((n) => {return  n -n/10})
console.log(res3);