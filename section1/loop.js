for(let i=0; i<10; i++){
    console.log(i);
}

// WAP to print all numbers either divisible by 7 or 13 from 1 to 100

// and - &&
// or  - ||
// not - !

for(let i=1; i<=100; i++){

    if(i%7==0 || i%13==0){
        console.log(i, 'yes');
    }

}

console.log('-------fibbonacci series------\n');

let [a, b] = [0, 1];

console.log(a);
console.log(b);

for(let i=0; i<10; i++){
    let c = a+b;
    console.log(c);
    [a, b] = [b, c];

}

// WAP to find factorial of a number
console.log('-------factorial------\n');
lenode_nt num = 6;
let f = 1;

for( let i=2; i<=num; i++ ){
    console.log(f);
    f = f*i;
}

console.log(f);


console.log('-------prime number------\n');

let mynum = 7;
let prime = true;

for(let i=2; i<mynum/2; i++){
    if(mynum % i == 0){
        prime = false;
        console.log('not prime');
        break;
    }
}

if(prime) console.log('prime');

// WAP to reverse a number
console.log('-------reverse number------\n');

let n1 = 37654;
let reverse = 0;

while(n1 > 0){
    console.log(reverse);
    let r = n1%10;
    reverse = reverse * 10 + r;
    n1 = parseInt(n1/10);
}

console.log(reverse);