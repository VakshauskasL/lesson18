'use strict';

//1. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном '1', 1, 3. 


let a='1';
if (a === 1) {
    console.log('true');
} else {
    console.log('false');
}


//2. Если переменная item не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу 
//скрипта при item, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.


//№2.1
let item;
if (!item) {
    console.log('true');
} else {
    console.log('false');
}
//№2.2
!item ? console.log('true'): console.log('false');


//3. Если переменная a больше нуля и меньше 4-ти, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 4, 0, -3, 2.

if (a > 0 && a < 4) {
    console.log('true');
} else {
    console.log('false');
}

//4. Если переменная a больше 3-х и меньше 12-ти, или переменная b больше или равна 7-и и меньше 15-ти, 
//то выведите 'Верно', в противном случае выведите 'Неверно'.
let b;
if (a > 3 && a < 12 || b >= 7 && b < 15) {
    console.log('true');
} else {
    console.log('false');
}

//.5 В переменной month лежит какое-то число из интервала от 1 до 12. 
//Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month =+prompt('Determine what time of the year this month falls (winter, summer, spring, autumn in the range from 1 to 12');        
if (month == 12 || month == 1 || month == 2) {
console.log("Winter");
} else if (month == 3 || month == 4 || month == 5) {
console.log("Spring");
} else if (month == 6 || month == 7 || month == 8) {
console.log("Summer");
} else if (month == 9 || month == 10 || month == 11) {
console.log("Autumn");
} else {
console.log("Unknown time of the year");
}


//6. Выведите в консоли столбец четных чисел в промежутке от 0 до 100. (используя for или while)
for (let k = 0; k <= 100; k += 2) {
    console.log(k);
}