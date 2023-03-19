let movies = ['RRR', 'PK', 'Run', '365days', 'KGF', 'Mard'];

// Indexing
console.log(movies[4]);
console.log(movies.indexOf('Run'));
console.log(movies.at(-3));
console.log(movies.length);
// slicing
console.log(movies.slice(2, 5));
console.log(movies.slice(2));
console.log(movies.slice(2, 100));
// adding elements
// sprid operator
console.log( [...movies,'Barfi'] );
console.log( ['Batman',...movies,'Barfi'] );

console.log(movies);
console.log([...movies.slice(0,4), '100 days', ...movies.slice(4)]);
// removing elements from array
movies.pop();
//  remove last element from array
console.log(movies);
movies.shift();
// remove first element from array
console.log(movies);

// removing multiple elements from array
movies = [...movies, 'flash' , 'exit14', 'nh10' ]
console.log(movies);
movies.splice(3, 2);
// (from which index to start,how many elements)
console.log(movies);