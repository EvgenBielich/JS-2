// 1

// const parent = {
//    name: 'Stacey',
//    surname: 'Moore',
//    age: 54,
//    heritage: 'Irish'
//  };

//  const child = Object.create(parent);

//  child.name = 'Jason';
// child.age = 27;

// console.log(parent);
// console.log(child);

// 2

// const ancestor = {
//    name: 'Paul',
//    age: 83,
//    surname: 'Dawson',
//    heritage: 'Irish'
//  };

//  const parent = Object.create(ancestor);
//  parent.name = 'Stacey';
//  parent.surname = 'Moore';
//  parent.age = 54;

//  const child = Object.create(parent);
//  child.name = 'Jason';
//  child.age = 27;

// 3

// function Car(brand, model, price) {
//    this.brand = brand;
//    this.model = model;
//    this.price = price;
// }

// const audi = new Car();

// console.log(new Car('Audi', 'Q3', 36000));

// 4

// function Car({brand, model, price}) {
//    this.brand = brand;
//    this.model = model;
//    this.price = price;
//  }

//  5

// function Car({ brand, model, price }) {
//    this.brand = brand;
//    this.model = model;
//    this.price = price;
//  }

//  Car.prototype.getPrice = function() {
//     return this.price
//  };

//  Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
//  };

//  6

// function Storage( items ) {
//    this.items = items;
// }

// Storage.prototype.getItems = function () {
//    return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//    return this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//    for (const it of this.items) {
//       if (it === item) {
//           return this.items.splice(this.items.indexOf(it), 1)
//       }
//    }
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// 7

// С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// function StringBuilder(baseValue) {
//    this.baseValue = baseValue;
//    this.value = baseValue;
// }

// // getValue() - возвращает текущее значение свойства value.
// StringBuilder.prototype.getValue = function () {
//    return this.value;
// }

// // padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// StringBuilder.prototype.padEnd = function (str) {
//    this.value = this.value + str;
//    return this.value;
// }
// // padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// StringBuilder.prototype.padStart = function (str) {
//    this.value = str + this.value;
//    return this.value;
// }
// // padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// StringBuilder.prototype.padBoth = function (str) {
//    this.value = str + this.value + str;
//    return this.value;
// }


// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// 9

// class Car {
//    brand;
//    model;
//    price;

//     constructor ({brand, model, price}) {
//       this.brand = brand;
//     this.model = model;
//     this.price = price;
//     }
//   }

// 10

// class Car {
//    constructor({ brand, model, price }) {
//      this.brand = brand;
//      this.model = model;
//      this.price = price;
//    }

//    getPrice() {
//    return this.price;
//    }

//    changePrice(newPrice) {
//    this.price = newPrice
//    }
//  }

// 11

// class Car {
//    #brand;
//    constructor({ brand, model, price }) {
//      this.#brand = brand;
//      this.model = model;
//      this.price = price;
//    }

//    getBrand() {
//    return this.#brand;
//    }

//    changeBrand(newBrand) {
//    this.#brand = newBrand;
//    }
//  }

// 12
// Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватн

// class Storage {
//    #items;

//    constructor( items ) {
//       this.#items = items;
//    }

//    getItems() {
//       return this.#items;  
//     };

//     addItem(newItem) {
//       this.#items.push(newItem); 
//    };

//    removeItem(item) {
//       const itemIndex = this.#items.indexOf(item);
//       this.#items.splice(itemIndex, 1)
//    }
// }

//  const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
//  console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
//  storage.addItem("Дроид");
//  console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
//  storage.removeItem("Пролонгер");
//  console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


//  13
// Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным

// class StringBuilder {
//    #value;

//    constructor(value) {
//       this.#value = value;
//    }

//    getValue() {
//       return this.#value;
//    }

//    padEnd(str) {
//      this.#value += str;
//    }

//    padStart(str) {
//       this.#value = str + this.#value;
//    }

//    padBoth(str) {
//       this.#value = str + this.#value + str;
//    }
// }

//  const builder = new StringBuilder('.');
//  console.log(builder.getValue()); // '.'
//  builder.padStart('^');
//  console.log(builder.getValue()); // '^.'
//  builder.padEnd('^');
//  console.log(builder.getValue()); // '^.^'
//  builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


//14
// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// class Car {
//    #model;
//    #price;
//    #brand;

//    constructor({ brand, model, price }) {
//      this.#brand = brand;
//      this.#model = model;
//      this.#price = price;
//    }

//    get brand() {
//      return this.#brand;
//    }

//    set brand(newBrand) {
//       this.#brand = newBrand;
//    }

//    get model() {
//      return this.#model;
//    }

//    set model(newModel) {
//      this.#model = newModel;
//    }

//    get price() {
//      return this.#price;
//    }

//    set price(newPrice) {
//      this.#price = newPrice;
//    }
//  }

// 15
// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

// class Car {

//    static MAX_PRICE = 50000;
//    #price;

//    constructor({ price }) {
//       this.#price = price;
//    }

//    get price() {
//       return this.#price;
//    }

//    set price(newPrice) { 
//       if (newPrice > Car.MAX_PRICE) { return }
//          return this.#price = newPrice
//    }

// }
//  const audi = new Car({price: 35000});
//  console.log(audi.price); // 35000

//  audi.price = 49000;
//  console.log(audi.price); // 49000

//  audi.price = 51000;
//  console.log(audi.price); // 49000

// 16
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.

// class Car {
//    static #MAX_PRICE = 50000;

//    static checkPrice(price) {
//       if(price > Car.#MAX_PRICE) {
//          return 'Внимание! Цена превышает допустимую.'
//       }

//       return 'Всё хорошо, цена в порядке.'
//       }

//    constructor({ price }) {
//      this.price = price;
//    }
//  }

//  const audi = new Car({ price: 36000 });
//  const bmw = new Car({ price: 64000 });

//  console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// 17

// class User {
//    email;

//    constructor(email) {
//      this.email = email;
//    }

//    get email() {
//      return this.email;
//    }

//    set email(newEmail) {
//      this.email = newEmail;
//    }
//  }

//  class Admin extends User {
// 	static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser' 
//     }
// }

//18

// class User {
//    email;

//    constructor(email) {
//      this.email = email;
//    }

//    get email() {
//      return this.email;
//    }

//    set email(newEmail) {
//      this.email = newEmail;
//    }
//  }

// class Admin extends User {
//    accessLevel; 

//    static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//    };

//    constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//    }

//  }

//  const mango = new Admin({
//    email: 'mango@mail.com',
//    accessLevel: Admin.AccessLevel.SUPERUSER
//  });

//  console.log(mango.email); // mango@mail.com
//  console.log(mango.accessLevel); // superuser

// 19
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

// class User {
//    email;

//    constructor(email) {
//      this.email = email;
//    }

//    get email() {
//      return this.email;
//    }

//    set email(newEmail) {
//      this.email = newEmail;
//    }
// }

// class Admin extends User {

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

  // Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.

//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }

  // Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

// }

//  const mango = new Admin({
//    email: 'mango@mail.com',
//    accessLevel: Admin.AccessLevel.SUPERUSER
//  });

//  console.log(mango.email); // mango@mail.com
//  console.log(mango.accessLevel); // superuser
//  mango.blacklist('poly@mail.com');
//  console.log(mango.blacklistedEmails); // 'poly@mail.com'
//  console.log(mango.isBlacklisted('mango@mail.com')); //  false
//  console.log(mango.isBlacklisted('poly@mail.com')); // true 