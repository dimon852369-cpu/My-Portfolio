/*console.log-виписати текст в консоль*/
console.log("Hello JS");
console.log("теж саме що log")
console.error("Error");
console.warn("Увага!");

               /////* Урок ЗМІННІ */

/*var або let-звичайна змінна можна змінювати під час виконання програми*/
var numbe=5;
console.log(numbe);
var some = 'Result:'; //можна прописати цифри (string-тип даних що відповідає за рядки)

numbe=7;
console.log(some + numbe + '!');

/*const-константа значення якої не можна змінити */
const nambep = 10;
//nambep=5- не можна змінити при const...
console.log(nambep);

//true-для перевірки даних(значення буліан(boolean))
var isRomaHasCar = true;

        /////*Урок Математичні дії(над змінними) Клас Math */

var num1 = 15;
var num2 = 7;

//var res = num1 - num2 або 
console.log('Result:' + (num1 - num2) );
console.log('Result:' + (num1 + num2) );
console.log('Result:' + (num1 * num2) );
console.log('Result:' + (num1 / num2) );
//це залишок при ділені
console.log('Result:' + (num1 % num2) );

var num3 = 5;
var num4 = "10";
console.log(num3 + Number(num4));

//також до змінних можна +-*/ числа у їх значення
//num1 = num1 + 10; //або ж
//тут воно зробить "дію" все по списку 
num1 += 10;
num1--;
console.log(num1)

//шукаємо число PI
// abs число по модулю якщо передаємо + то він лишається
                                   // - стає позитивним
var pi = Math. PI;
console.log(Math.abs(-1));

var pi = Math. PI; //min ta max
console.log(Math.max(-1, 8, 4, 0));

          /////УМОВНІ ОПЕРАТОРИ У МОВІ JS

//Для початку УМОВНА КОНСТРУКЦІЯ-ми створюємо умову 'так''ні' для виконання різних кусків коду
var namber = 25; // Some
var isHasCar = true
//для перевірки на рівність завжди два ==
// != недорівнює, також namber-більше,менше,меншеабодорівнює
// if-якщо                       >      <    <= та >=
if (namber=25) {
    console.log("Yes");
    //можна писати скорочено !isHisCar наприклад
if (isHasCar) 
    console.log("true Car")} 
//else if-якщо if не спрацює
else if (namber==25) {
         console.log('this else if')}
//завжди після if, else-інакше
else 
    console.log('Else')

//ПРИКЛАД2 ДЕ 
var namber2 = 25; // Some
var isHasCar2 = true
//виконується якщо і перша і друга умови коректні
if (namber2 =25 && isHasCar2) {
    console.log("2Yes"); 
    console.log("2true Car")} 
else if (namber==25) {
         console.log('this else if')}
else 
    console.log("Else") 

var word5 = "Kome"
switch (word5) {
       case "new": console.log('Its new');
                   console.log('Its new'); break;
       case"Some": console.log('Its Tru'); break;
       case 'Kome': console.log('Tru2'); break;
//default-якщо то все вгорі не спрацювало
default: console.log('Це все вгорі не працює');}

          /////МАСИВИ ДАНИХ, ОДНО- ТА БАГАТОВИМІРНІ МАСИВИ

          //Array-масив
var dat = new Array(1,2,5) //або []
var data = [2, 4, 6, 5.5, 'Wert', true];
data[0] = 'som';
//console.log(data[0]);//[]-той елемент який виводиться перший
console.log(data length);
