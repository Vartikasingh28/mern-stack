// defining the function

function addnums(a,b){
    c=a+b;
    console.log(c);
}
// calling the function
addnums(45,235);
// console.log(c)
const getAvg = function(m1, m2, m3=70){
    console.log(m1, m2, m3);
let avg = (m1+m2+m3)/3;
console.log(avg);
}
getAvg(70, 40);

const prodNums = (a,b) => {
let p = a*b;

console.log(p);
return p;
}
let res =prodNums (532, 235);

console.log(res);