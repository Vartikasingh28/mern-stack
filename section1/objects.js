let user ={ name: 'raju', email: 'raju@gmail.com', password : '4328563'};
console.log(user.email);
console.log(user['name']);
user.address = 'lucknow';
console.log(user);
user.email ='raju@hotmail';
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));

let smartphone = {
    brand : 'samsung',
    model : 's23 Ultra',
    price : 78000,
    color : 'white'
}
console.log(smartphone.color);
smartphone.color =['white','blue','red'];
console.log(smartphone);
console.log(smartphone.color[1]);
smartphone.color.push('blue');
console.log(smartphone);


