// ! модуль 2 -------------------------------------------------------------------------------------------------------------------------------------------------------
// 9
// return [array[0], array[array.length - 1]];

// 10--------------------------------------------------------------------------------------------------------------------------------
// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(delimeter);
//   return words;
// }

// splitMessage("Манго спешит на поезд", " ");

// 11------------------------------------------------------------------------------------------------------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// }

// calculateEngravingPrice("JavaScript у меня в крови", 10);
// calculateEngravingPrice("JavaScript у меня в крови", 20);
// calculateEngravingPrice("Веб-разработка это творческая работа", 40);

// 13-------------------------------------------------------------------------------------------------------------------------------------------

// function slugify(title) {
//   return title.toLocaleLowerCase().split(" ").join("-");
// }

// console.log(slugify("Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ"));

// 14----------------------------------------------------------------------------------------------------------------------------------------------------

// const fruits = ["яблоко", "слива", "груша", "апельсин", "банан"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// 15 -----------------------------------------------------------------------------------------------------------

// const oldClients = ["Манго", "Аякс", "Поли", "Киви"];
// const newClients = ["Персик", "Хьюстон"];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

//  16 -----------------------------------------------------------------------------------------------------------------

/* Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

В противном случае функция должна вернуть новый массив целиком. */

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   console.log(newArray.length);

//   return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
// }

// console.log(makeArray(["Манго", "Поли"], ["Аякс", "Челси"], 3));
// console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран", "Венера"], 0));
// console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 4));

// 18 ---------------------------------------------------------------------------------------------------------------------------

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// 19

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i =0; i<fruits.length; i+=1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// 20

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const ord of order) {
//     total += ord;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// 21

// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   const splitedArr = string.split(" ");
//   let longest = splitedArr[0];
//   for (const text of splitedArr) {
//     if (text.length > longest.length) {
//       longest = text;
//     }
//   }
//   return longest;
// }

// console.log(findLongestWord("May the force be with you"));

//  22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 7));

//23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {

//   const newArr = [];

//   for (const number of numbers) {
//     if (number > value) {
//       newArr.push(number);
//     }
//   }
//   return newArr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));

// 25
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   const newArr = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       newArr.push(element);
//     }
//   }

//   return newArr;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// 29

// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   let num = [];

//   for (i = start; i <= end; i += 1) {
//     if ([i] % 2 === 0) {
//       num.push(i);
//     }
//   }
//   return num;
// }

// console.log(getEvenNumbers(6, 12));

// 32

// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (const element of array) {
//     if (element === value) {
//       return true;
//     }
//   }

//   return false;

//   // Пиши код выше этой строки
// }
