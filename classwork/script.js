"use strict";///ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

let a = true; //истина

let b = 1;

let c = 2;
//
console.log(a > b);//false -ложь
console.log(a < b); //true-правда
console.log(a >= b);//false
console.log(a <= b);//true
console.log(a == b);//false
console.log(a != b);//true

let ifMore = a > b;

//Сравнение строк
console.log('Б'>'A');//true

console.log('борис'>'Андрей');//true маленькие символы имеют вес больше чем большие.

console.log('2'>'14');//true

console.log( 2> 14);//false

console.log( +'2'>+'14');//false

//Сравнение разных типов true=1. false=0;

console.log( '2'> 1);//true

console.log( '01'== 1); //true

console.log( false == 0);//true

console.log( true == 1 ); //true

//Строгое равенство

console.log( true === 1); //false

//Сравнение null и undefinited

console.log( null == undefined);//true

console.log( +null );
console.log( null==0);//false
console.log( null!= 0);//true
console.log( null> 0);//false
console.log( null >= 0);//true

console.log( +undefined ); //NaN

console.log( undefined== NaN); //false

console.log( + NaN);//NaN

//NaN и undefinited при сравнении с ними-всегда возвращает false

//Взаимодействие с пользователем
/*

alert('Привет'); //взаимодействие с пользователем

let userMessage=prompt( 'Сколько лет?','20' ); //выводится окно

console.log( userMessage );

let isTrue = confirm('Согласны?');

console.log( isTrue );
*/

//Условные операторы: if, ? если

let year=prompt('Какой сейчас год?');


if( year=='2019'){
    console.log('Верно'); //true то выполнится , если другой год -ничего не напишет в consol
}
else{
    console.log('Не верно');
}
////В логическом контексте : null, '' , undefined , 0, NaN -является false.
//Остальное значение true

if(0) {//false

}

if(1) {//true

}

let cond=(year !=2019);//2019=false Любое равенство преобразуется к числу!!!!!

//Неверное значение else

if(1){
    //true
}else{
    //false
}
//Несколько условий, else if
//2019

if( year>=2020){//false
    console.log('Меньше');   

}else if (year ==2019){//true
    console.log('Верно');

}else{
    console.log('Больше');
}

//Оператор ? знак (тернарный оператор-так как 3 операнда)

//условие ? значение1 : значение 2
let age=15;
let access = (age>14)? true :false;
access = (age>14)? 'Доступ разрешен' :'Доступ запрещен';

//Несколько операторов сравнения '?'

(year>=2019)? console.log('Меньше'):
(year==2019)? console.log('Верно'):
console.log('Больше');

//Логический оператор ИЛИ ||

console.log(true||true );//true
console.log( true||false);//true
console.log(false||true);//false
console.log( false||true);//true


let hours = 9;

if(hours <10 || hours>18 ){
    console.log('Офис закрыто до 10 и после 18')
}


let isWeekend=true;

if (hours<10|| hourse>18||isWeekend){
    console.log('Офис зыкрыт до 10 и после 18 или в выходной');
}

let x;

true || (x=1);

console.log(x); //undefined

//ИЛИ запинается на правде

// Оператор И -&& (амперсант)

console.log( true && true);// true
console.log(true && false);//false
console.log(false && true);//false
console.log( false && true);//false

let hour=12, minutes=30;

if(hour==12 && minutes==30){
    console.log('Время:12.30');
}

//&& Запинается на лжи

//Приоритет у && больше чем у || -ИЛИ

console.log(5||1 && 0);//5

//Оператор НЕ !
let value = 10;

let result = !value;//false

//Преобразование к логическому(булевое) типу!!!

console.log (!!'строка');//true

console.log( !!null );//false

console.log( null||2 || undefined );//2

//Строковое преобразование

console.log(String(null) ==='null');//true

//Числовое преобразование

x = +'123';

x=Number("123");

/*
undefined=NaN
null=0
true/false=1/0
строка=откидываются пробелы,если число то приобразовывает.
Если числа в перемешку с иными символами то NaN

*/

//Логическое преобразование

console.log( !! '0'); //true

console.log( Boolean(" ") );//true

console.log( 0 == "0"); //true







