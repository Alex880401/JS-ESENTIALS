// Змінні

// 1)

const a = Number(prompt('введіть 1 множник:'));
const b = Number(prompt('Введіть 2 множник:'));
const mult = a * b;
console.log(mult);

// 2)

const c = Number(prompt('введіть чисельник:'));
const d = Number(prompt('Введіть знаменник:'));
const fr = c / d;
console.log(fr);

// 3)

const e = Number(prompt('введіть 1 доданок:'));
const f = Number(prompt('Введіть 2 доданок:'));
const sum = e + f;
console.log(sum);

// 4)

const num1 = Number(11);
console.log(num1);
const bln = Boolean(true);
console.log(bln);
const str1 = String('java script');
console.log(str1);
const str2 = String('100');
console.log(str2);

// 5)

let num = 1;
console.log(num);
num = num +=11;
console.log(num);
num = num -=11;
console.log(num);
num = num *=11;
console.log(num);
num = num /=11;
console.log(num);
num = num +=1;
console.log(num);
num = num -=1;
console.log(num);

// Введення/виведення

// 1)

const aa = Number(prompt ('Введіть число:'));
const pow = Math.pow(aa,2);
console.log('Число', aa ,'в 2 степені дорівнює:', pow);

// 2)

const bb = Number(prompt ('Введіть 1 число:'));
const cc = Number(prompt ('Введіть 2 число:'));
const av = (bb + cc) / 2;
console.log('Середнє арифметичне чисел', bb ,'і', cc, 'дорівнює:', av);

// 3)

const min = Number(prompt ('Введіть кількість хвилин:'));
const hrs = min / 60;
console.log('Кількість годин в', min ,'хвилинах:', hrs);

// 4)

const gretting = 'Hello, ';
const userName = prompt("Введіть Ваше ім'я!");
alert (gretting + userName);

// 5)

const firstName = (prompt("Введіть ім'я коримтувача"));
const lastName = (prompt("Введіть прізвище користувача")); 
const Email =  (prompt("Введіть Email"));

document.writeln ("<h2>" + firstName + " " + lastName + "<h2/>");
document.writeln ("<p>" + Email + "<p/>");







