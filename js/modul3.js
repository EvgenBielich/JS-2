// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Просторная квартира в центре",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   },
//   owner = {
//     name: "Генри",
//     phone: 982 - 126 - 1588,
//     email: "henry.carter@aptmail.com",
//   };

// console.log(apartment);

// 4

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Генри",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment;
// const firstTag = apartment.tags[0];
// const lastTag = apartment;

// 11

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//   if(apartment.hasOwnProperty(key)) {
//   	keys.push(key);
//   values.push(apartment[key]);
//   }
// }

// 12

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// 13

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
// 	  values.push(apartment[key]);
// }

// 14

// function countProps(object) {
//   let propCount = 0;

// 	const keys = Object.keys(object);

//   for (const key of keys) {
//       propCount += 1;
//   }

//   return propCount;
// }

// 15

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// 16
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);

//   for (const value of values) {
//     totalSalary += value;
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// 17
// Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);

// 18
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Радар"));

// 19
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const allValues = [];

//   for (const product of products) {
//     const keys = Object.keys(product);

//     for (const key of keys) {
//       if (key === propName) {
//         allValues.push(product[key]);
//       }
//     }
//   }
//   return allValues;
// }

// console.log(getAllPropValues("price"));

// 20
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }

//   return totalPrice;
// }

// console.log(calculateTotalPrice("Радар"));

// 30
// function makeTask(data) {
//   const completed = false;
//   const category = "Общее";
//   const priority = "Обычный";

//   return { category, priority, completed, ...data };
// }

// 31

// function add(...args) {
//   return args.reduce((previous, current) => {
//     return previous + current;
//   });
// }

// console.log(add(15, 27));

// 32
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }

//   return total;
// }

// 33
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// function findMatches(numbers, ...args) {
//   const matches = []; // Не изменяй эту строку

//   for (const arg of args) {
//     if (numbers.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// 34

// const bookShelf = {
//   books: ["Последнее королевство", "Страж снов"],
//   getBooks() {
//     return "Возвращаем все книги";
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
// };

// 35

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

// const bookShelf = {
//   books: ["Последнее королевство", "Мгла", "Страж снов"],
//   updateBook(oldName, newName) {
//     const oldBook = this.books.indexOf(oldName);
//     this.books.splice(oldBook, 1, newName);
//   },
// };

// console.log(bookShelf.updateBook("Последнее королевство", "Дюна"));

// 36

// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// const atTheOldToad = {
//   potions: [],
// };

// 37
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],

//   getPotions() {
//     return this.potions;
//   },
// };

// 38
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   addPotion(potionName) {

//     this.potions.push(potionName);
//   },
// };

// 39
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potion

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//   },
// };

// 40
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   updatePotionName(oldName, newName) {
//     const oldPotion = this.potions.indexOf(oldName);
//     this.potions.splice(oldPotion, 1, newName);
//   },
// };

// 41
// const atTheOldToad = {
//   potions: [
//     { name: "Зелье скорости", price: 460 },
//     { name: "Дыхание дракона", price: 780 },
//     { name: "Каменная кожа", price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Зелья ${potionName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Пиши код выше этой строки
// };
