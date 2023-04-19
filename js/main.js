
let message = "Hello, world!";
console.log(message);

if(true){
 let message = "Goodbye!";
 console.log(message);
}

console.log(message);

var var_message = "Hello, VAR!";
console.log(var_message);

if (true) {
 let var_message = "Goodbye, VAR!";
 console.log(var_message);
}

console.log(var_message);

const speak = "lalala";
console.log(speak);

console.log(speak);

let str = 'String';
str = "My String";
str = `My String!`;
console.log(str);

let name = "Mark"
console.log(`Hello, ${name}!!!`);

let number = 123;
let another = 256.356;
console.log(number * 5);

let check = true;
let checked = false;
console.log(check, checked);

let age = null;
console.log(age);

let x;
console.log(x);

let user = {
 _name: "Jack",
 age: 16,
 isAuth: true,
 jobs: {
  first: "Broker",
  second: "Builder,"
 }
}
console.log(user);

console.log(user.isAuth);
console.log(user['age']);

let user1 = "Jack1";
console.log(user1);

// масиви array

let arr = ['one', 'two', 'three', 26, ['hello', true]]
console.log(arr[0]);
console.log(arr[1]);

arr[1] = 'TWO'
console.log(arr[1]);
console.log(arr.length);

arr.push('four', 'six');
console.log(arr);

arr.pop()
console.log(arr);

let addUnshift = arr.unshift('zero', 10);
console.log(arr);

arr.shift();
console.log(arr);

let arr_num = [1, 2, 23, 3, 4, 5, 12, 6, 7, 8, 9, 10, 11];
console.log(arr_num);

let str_arr = arr_num.join(); // число в рядок
console.log(str_arr);

let str_arr1 = arr_num.join("-!"); // число в рядок
console.log(str_arr1);

let revers_ = arr_num.reverse();
console.log(revers_);

let sort_ = arr_num.sort();
console.log(sort_);

let alphabet = ['Orange', 'Banana', 'Apple', 'Mango']
alphabet.sort();
console.log(alphabet);

let alph_part = alphabet.slice(1,3);
console.log(alph_part);







// let Message = "Goodbye, world!";
// console.log(Message);

// var name = "Mark";
// console.log(name);

// var name = "Jack";
// console.log(name);

// string number boolean null undefined