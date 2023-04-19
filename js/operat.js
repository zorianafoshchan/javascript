// арифмет

let a = 5;
let b = 6;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

let a_str = 'My ';
let b_str = 'string';
console.log(a_str + b_str);

console.log(1 + 3);
console.log(1 + '3');

// інкремент ++ (+1)
// декремент -- (-1)

let a_2 = 100;
a_2 ++
console.log(a_2);

let b_2 = 100;
b_2 --
console.log(b_2);

// оператори порівняння

let a_tr_fl = '5';
let b_tr_fl = 5;
console.log(a_tr_fl > b_tr_fl);
console.log(a_tr_fl >= b_tr_fl);
console.log(a_tr_fl <= b_tr_fl);
console.log(a_tr_fl == b_tr_fl);
console.log(a_tr_fl === b_tr_fl);

// оператор не дорівнює

console.log(a_tr_fl != b_tr_fl);
console.log(a_tr_fl !== b_tr_fl);

// логічні оператори &&(AND) ||(OR)

console.log(true && true && true);
console.log(true && false && true);

console.log(100 > 10 && 30 < 40);

console.log(true || true || true);
console.log(true || false || false);

let hour = 6

if (hour < 10 || hour > 18){
 console.log('Office is closed!');
}


//взаємодія з користувачем

alert('Hello, World!');  //модальне вікно повідомлення

// let result = prompt(title, default);//модальне вікно запит
let result = prompt("What is your name?", "" );

alert(`Hello, ${result}`)

//confirm - модальне вікно з питанням і двома кнопками: ок і кенсел
//let result = confirm(question);
let _result = confirm("Are you an adult?");
alert(`Adult = ${_result}`);
alert('Adult = ' + _result);