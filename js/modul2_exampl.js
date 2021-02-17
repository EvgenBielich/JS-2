//!  ------------- MODUL #2 ----------------------------------------------------------------------------------------------------------------------------

// МАССИВЫ

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // console.table - выводит в консоль элементы массива в виде таблицы;
// console.table(friends);

// // узнать последний индекс
// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// // изменение эл-та массива
// friends[1] = 'qweqwe';
// console.table(friends);

/* Перебор (интерация) массива
- for - е
сли нужен индекс или нужно изменить эл - т массива
- for...of  - если индекс не нужен и в массиве ничего менять не надо */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//    console.log(friends[i])
// }

// for (let i = 0; i <= lastIndex; i += 1) {
//    friends[i] += '-1';
// }
// console.table(friends);

// for (const friend of friends) {
//    console.log(friend);
// }

// ! ЗАДАЧИ ----------------------------------------------------------

// ! Посчитать общую сумму покупок в корзине -------------------------------------------

// const cart = [54, 28, 105, 70, 92, 17, 120, 58, 78, 23];
// 2 сделать переменную  total до цикла
// let total = 0;
// 1 Перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
// console.log(cart[i]);

// 3 каждый эл-т приплюсовать  к total
// total += cart[i];
// }

// Через for ... of - проще меньше кода------------------------------------------------
// 
// for (const value of cart) {
//    total += value;
// }
// console.log('Total: ', total)

// добавить такс-----------------------------------------------------------------------

// for (let i = 0; i < cart.length; i += 1) {
//    cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

// for (let value of cart) {
// value = Math.round(value * 1.1);
// }

// console.log(cart);

// ! Напиши скрипт который подсчитвает сумму всех четных чисел в массиве-----------------------------

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

//  1 Переменная total
// let total = 0;
// 2 Перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//    const number = numbers[i];
//    console.log(number);
// 3 на каждой итерации проверить эл-т на четность
// if (number % 2 === 0) {
//    console.log('Четное!!!!');
// 4 если четное плюсуем к total
//       total += numbers[i];
//    }
// }

// через фор..оф

// for (const number of numbers) {
//    console.log(number);

//    if (number % 2 === 0) {
//       console.log('Четное!!!!');

//       total += number;
//    }
// }

// console.log("Total: ", total);

// ! написать скрипт поиска логина -------------------------------------------------------------------

/*- Если логина нет, вывести - "Пользователь [логин] не найден."
- если логин есть, вывести - "Пользователь [логин] найден."

- сначала через for
- потом через for...of
- логика break
- метод includes() с тернанрым оператором */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';
// переменная message - задается для первых 2х вариантов

//  c for ---------------------------------------------------------------

// for (let i = 0; i < logins.length; i += 1) {
//    const login = logins[i];

//    if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден.`
//       break;
//    }

//    message = `Пользователь ${loginToFind} не найден.`
// }
// console.log(message);

// c for....of ----------------------------------------------------------

// for (const login of logins) {
//    console.log('login: ', login);
//    console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//    if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден.`
//       break;
//    }
// }
// console.log(message);

// c includes -----------------------------------------------------------

// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// ! Написать скрипт поиска самого маленького числа в массиве,----------------------------------------------------------------
// при условии что числа уникальные (не повторяются).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {

//    if (number < smallestNumber) {
//       smallestNumber = number;
//    }
// }
// console.log("smallestNumber: ", smallestNumber);

// ! Написать скрипт , который обьединяет все эл-ты массива в одно строковое значение -----------------------------------------------------
// эл-тов может быть произвольное кол-во.
// Пусть элементы масиива в строке будут разделены запятой.
// - сначала через for
// - потом через join().

// должно получится "Mango, Poly, Kiwi, Ajax"

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// c for ----------------------------------------------------------------

// let string = '';

// for (const friend of friends) {
//    string += friend + ',';
// }
// string = string.slice(0,string.length - 1)
// console.log(string);

//  c join() ------------------------------------------------------------

// const string = friends.join(', ');
// console.log(string);

// ! Скрипт который заменяет регистр каждого символа на противополодный----------------------------------------------------------
// например, если строка "JavaScript", то на выходе "jAVAsCRIPT"

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//    console.log(letter);

// устаревший способ

// if (letter === letter.toLocaleLowerCase()) {
//    console.log('Эта буква в нижнем регистре! - ', letter);

//    invertedString += letter.toLocaleUpperCase();
// } else {
//    console.log('Эта буква в верхнем регистре! - ', letter);
//    invertedString += letter.toLocaleLowerCase();
// }

// Бoлее легкий способ

//    const isEqual = letter === letter.toLowerCase();
//    invertedString += isEqual ? letter.toUpperCase() : letter.toLocaleLowerCase();
// }

// console.log(invertedString);

// ! Дeлаем slug в URL из названия статьи(например на dev.to) ----------------------------------------------------------------------
// Заголовок статьи состоит только из букв и пробелов

//    - нормализуем строку
//    - разбирем по словам
//    - сшиваем в строку с разделителями

// должно получится top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';

// старый метод

// const normalizedTitle = title.toLocaleLowerCase();
// console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');
// console.log(words);
// const slug = words.join('-');
// console.log(slug);

// проще метод

// const slug1 = title.toLocaleLowerCase().split(' ').join('-');
// console.log(slug1);

// ! скрипт который считает сумму элементов двух массивов---------------------------------------------------------------

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//    total += number;
// }

// console.log(total);

// ! РАботаем с коллекцией карточек в ТРелло -----------------------------------------------------------------------
// - метод splice()
// - удалить
// - добавить
// - обновить

// const cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"];

// console.table(cards);

// удаление (по индексу), метод indexOf()-----------------------------

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// Добавление (по индексу)---------------------------------------------

// const cardToInterest = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInterest);
// console.table(cards);

// обновление (по индексу)--------------------------------------------

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');
// console.table(cards);

// ! ФУНКЦИИ!!!---------------------------------------------------------------------------------------------------------------------------------------------------------------

/*const add = function (x, y) {
   console.log(x);
   console.log(y);

   const result = x + y;
   console.log('x+y=', x + y);

   return result;
}
// Вызов функции (),  // add(5, 3);

const r1 = add(5, 3);
console.log('r1 = ', r1);*/

// return - возврат, прекращение функции

// const fn = function () {

//    console.log(1);
//    console.log(2);
//    return 555;
//    console.log(3);
// };

// console.log(fn());

// ! написать функцию calcuLateTotalPrice(items)-----------------------------------------------
// которая принимает массив цен(чисел) и возвращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//    total += value;
// }

// console.log('Total: ', total);

// через функцию ---------------------------------------------------------------------

// const calcuLateTotalPrice = function (items) {
//    console.log('items внутри функции', items);

//    let total = 0;

//    for (const item of items) {
//       total += item;
//    }

//    return total;
// }

// console.log(calcuLateTotalPrice([1, 2, 3]));
// console.log(calcuLateTotalPrice([5, 10, 15, 20]));
// console.log(calcuLateTotalPrice([100, 200, 300]));

// ! функция logItems(items) для перебора и логирования массива-------------------------------------------

// const logItems  = function (items) {
//    for (const item of items) {
//       console.log(item);
//    }
// }

// logItems(['Mango', 'Poly', 'Kiwi', 'Ajax']);
// logItems([1, 2, 3, 4, 5,]);
// logItems(['клавиатура', "наушники", "часы"]);

// ! Функция  findLogin(allLogins, login) для поиска логина---------------------------------------------

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';

// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind} не найден.`;

// console.log(message);


// через фор-оф-------------------------------------------------------------------------------------

// const findLogin = function (allLogins, loginToFind) {

//    for (const login of allLogins) {
//       if (login === loginToFind) {
//          return `пользователь ${loginToFind} найден.`;
//       }
//    }

//    return `пользователь ${loginToFind} нe найден.`;
// };

// функция через тернанрый оператор --------------------------------------------------------------

// const findLogin = function (allLogins, loginToFind) {
//    return allLogins.includes(loginToFind)
//       ? `Пользователь ${loginToFind} найден.`
//       : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'dfdfsgdfhg432'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'dfdffhg'));
// console.log(findLogin(logins, 'aj4xth3m4n'));


// ! Написать функцию findSmallesNumber поиска самого маленького числа в массиве,----------------------------------------------------------------
// при условии что числа уникальные (не повторяются).


// const findSmallesNumber = function (numbers) {
//    let smallestNumber = numbers[0];

//    for (const number of numbers) {

//       if (number < smallestNumber) {
//          smallestNumber = number;
//       }
//    }

//    return smallestNumber;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100,54,8,12,47]));
// console.log(findSmallesNumber([7,21,84,15,4]));


// ! функция changeCase(string) которая заменяет регистр каждого символа на противоположный----------------------------------------------------------
// например, если строка "JavaScript", то на выходе "jAVAsCRIPT"

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//    const isEqual = letter === letter.toLowerCase();
//    invertedString += isEqual ? letter.toUpperCase() : letter.toLocaleLowerCase();
// }

// console.log(invertedString);

// --------------------------------------------------------------------------------------------------

// const changeCase = function (string) {
//    const letters = string.split('');
//    let invertedString = '';

//    for (const letter of letters) {
//       const isInLowerCase = letter === letter.toLowerCase();

//       invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLocaleLowerCase();
//    }

//    return invertedString;
// }

// console.log(changeCase('jfjkLKJNnBGJ'));
// console.log(changeCase('AAAaaaAAAaaa'));


// !Функция  slugify(string) получает строку и возвращает  в URL из названия статьи----------------------------------------------------------------------
// статья состоит только из букв и пробелов


// const title = 'Top 10 benefits of React framework';


// const slug1 = title.toLocaleLowerCase().split(' ').join('-');
// console.log(slug1);

// --------------------------------------------------------------------------------------------------

// const slugify = function (string) {
//    return string.toLocaleLowerCase().split(' ').join('-');

// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Statics Web Apps are awesome'));


// ! Псевдомассив arguments и Array.from и ....------------------------------------------------------------------------------------------------------------------


// const fn = function () {
//    console.log(arguments);

//    const args = Array.from(arguments);

//    console.log(args);
// }


// rest- остаток -----------------------------------------------------------------------------------

// const fn = function (...args) {
//    console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// ! функция add для сложения произвольного кол-ва аргументов(чисел)
// ! операция  ....(reset)--------------------------------------------------------------------------

// const add = function (...args) {
//    console.log(args);
//    let total = 0;

//    for (const arg of args) {
//       total += arg;
//    }

//    return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));


// ! функция filterNumbers(array [, number1, ...]) которая :-----------------------------------------
   // - первым аругментом принимает массив чисел
   // - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
   // - функия должна вернуть новый массив , в котором будут только те аргументы, начиная со второго, для которых есть аналог в оригинальном массиве


const filterNumbers = function (array, ...args) {
   console.log(array);
   console.log(args);
   const uniqeElements = [];
   
   for (const element of array) {
      if (args.includes(element)) {
         uniqeElements.push(element);

         console.log(`${element} есть везде`);
      }  
   }

   return uniqeElements;
   }


console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10,15,25,30], 23,30,18,15));