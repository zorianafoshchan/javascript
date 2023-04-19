// if (condition)тру{
   
// } elseфолс{
 
// }

let year = prompt("When did JS first appear?", '');
if (year == 1995){
 alert("You're right!")
} else if (1990 < year && year < 2000) {
 alert("mostly right.")
} else{
 alert("you failed.")
}

let age = +prompt('How old are you?');
let prefix;
// if (age === 1){
//  prefix = 'year';
// } else{
//  prefix = 'years';
// }

prefix = age === 1 ? 'year' : 'years';

alert(`You are ${age} ${prefix} old.`)

// switch

let value = +prompt('2+2= ', '')
// if (value === 3){
//  alert('More...');
// } else if (value === 4){
//  alert('You are right.');
// } else if (value === 5){
//  alert('Less...');
// } else{
//  alert('I don`t know this value.');
// }

switch (value){
 case 3:
  alert('More...');
  break;
 case 4:
  alert('You are right!');
  break;
 case 5:
  alert('Less...');
  break;
 default:
  alert("I don't know this value.")
}