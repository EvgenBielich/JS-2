// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log(totalPrice);
// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка ${deliveryFee} включена в сумму заказа.`;

// console.log(message);

// ----------------------------------------------------------------------------------------

// function sayHi() {
//   console.log("Привет, это моя первая функция!");
// }

// sayHi();

// ----------------------------------------------------------

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = pricePerItem * orderedQuantity;
//   console.log(totalPrice);

//   return totalPrice;
// }

// calculateTotalPrice();

// -----------------------------------------------------------------

// const available = 100;
// const ordered = 50;

// function checkStorage(available, ordered) {
//     let message;
//     if (ordered >= available) {
//         message = 'На складе недостаточно товаров!';
//     } else () {
//         message = 'Заказ оформлен, с вами свяжется менеджер';
//     }
//   return message;
// }

// ------------------------------------------------------------

// let a = 5;
// a += 2;

// console.log(a);

// ----------------------------------------------------------------------------------------

// let pricePerDroid = 3000;
// let orderedQuantity = 5;
// let customerCredits = 23000;

// let message;
// let totalPrice;
// totalPrice = pricePerDroid * orderedQuantity;

// if (totalPrice >= customerCredits) {
//   console.log(`Недостаточно средств на счету`);
// } else {
//   console.log(
// `Вы купили ${orderedQuantity} дроидов, на счету осталось ${(customerCredits -= totalPrice)} кредитов`;
//   );
// }

// console.log(makeTransaction);

// -------------------------------------------------------------------------------------

// const available = 50;
// vailable;
// const ordered = 20;
// ordered;

// if (ordered === 0) {
//   console.log("В заказе еще нет товаров");
// } else if (ordered > available) {
//   console.log("Слишком большой заказ, на складе недостаточно товаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// console.log()
// checkStorage();

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе

// console.log("qwqweqeqwe");

// ----------------------------------------------------------------------------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }

// }

// getDiscount(5000);

// ----------------------------------------------------------------------------

// function getSubscriptionPrice(type) {
//   let price;

//   switch (
//     type // Дополни эту строку
//   ) {
//     case "starter": // Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case "professional": // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case "organization": // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   return price;
// }

// getSubscriptionPrice("professional");

// ------------------------------------------------------------------------------------------------------------

// function getShippingCost(country) {
//   let message;
//   switch (country) {
//     case "Китай":
//       price = 100;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;

//     case "Чили":
//       price = 250;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;

//     case "Австралия":
//       price = 170;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;

//     case "Ямайка":
//       price = 120;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;

//     default:
//       message = "Извините, в вашу страну доставки нет";
//   }

//   return message;
// }

// getShippingCost("Ямайка");

// -------------------------------------------------------------------

// const courseTopic = "JavaSript для начинающих";

// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);

// const firstElement = courseTopic[0];
// console.log(firstElement[0]);

// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Дополни эту строку

//   return substring;
// }

// console.log(getSubstring("Привет мир", 4));

// 33-----------------------------------------------------------------------
// function formatMessage(message, maxLength) {
//   let result;

//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }

//   return result;
// }

// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));

// 36-----------------------------------------------------------------------------------

// function checkForSpam(message) {
//   let result;

//   if (message.toLowerCase().includes("spam")) {
//     result = true;
//   } else if (message.toLowerCase().includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }

//   return result;
// }

// console.log(checkForSpam("Amazing SalE, only tonight!"));

// console.log;
