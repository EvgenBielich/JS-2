// 1

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function(item, index) {
//    totalPrice += orderedItems[index];
//  });

//   return totalPrice;
// }

// 2

// function filterArray(numbers, value) {
//    const filteredNumbers = [];

//    numbers.forEach(num => {
//       if (num > value) {
//          filteredNumbers.push(num);
//       }
//    });

//    return filteredNumbers;
// }

// 3

// function getCommonElements(firstArray, secondArray) {
//    const commonElements = [];

//    firstArray.forEach(item => {
//       if (secondArray.includes(item)) {
//          commonElements.push(item);
//        }
//    })

//    return commonElements;
// }

// 4

// const calculateTotalPrice = (quantity, pricePerItem) => {
//    return quantity * pricePerItem;
//  }

// 5

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// 6

// const calculateTotalPrice = (orderedItems) => {
//    let totalPrice = 0;

//      orderedItems.forEach(item => {
//        totalPrice += item;
//      });
//    return totalPrice;
// }

// 7

// const filterArray = (numbers, value) => {
//    const filteredNumbers = [];

//    numbers.forEach(number => {
//       if (number > value) {
//          filteredNumbers.push(number);
//       }
//    });
//    return filteredNumbers;
// }

// 8

// const getCommonElements = (firstArray, secondArray) => {
//    const commonElements = [];

//    firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//          commonElements.push(element);
//        }
//    });
//    return commonElements;
// }

// 9

// function changeEven  (numbers, value) {
// const newArray = [];

//  numbers.forEach(number => {
//     if (number % 2 === 0) {
//       return newArray.push(number = number + value);
//     }
//     newArray.push(number);
//  });
//    return newArray;
// };

// 10

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsLengths = planets.map((planet) => planet.length);

// 11

// const books = [
//    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const titles = books.map(book => book.title);

// 12

// const books = [
//    {
//      title: 'Последнее королевство',
//      author: 'Бернард Корнуэлл',
//      genres: ['приключения', 'историческое']
//    },
//    {
//      title: 'На берегу спокойных вод',
//      author: 'Роберт Шекли',
//      genres: ['фантастика']
//    },
//    {
//      title: 'Красна как кровь',
//      author: 'Ли Танит',
//      genres: ['ужасы', 'мистика']
//    }
//  ];

// const genres = books.flatMap((book) => book.genres);

// 13
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users

// const getUserNames = users => {
//    return users.map((user) => user.name);
// };

// 14
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users

// const getUserEmails = users => {
//    return users.map((user) => user.email);
// };

// 15

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// 16

// const books = [
//    {
//      title: 'Последнее королевство',
//      author: 'Бернард Корнуэлл',
//      genres: ['приключения', 'историческое']
//    },
//    {
//      title: 'На берегу спокойных вод',
//      author: 'Роберт Шекли',
//      genres: ['фантастика', 'мистика']
//    },
//    {
//      title: 'Красна как кровь',
//      author: 'Ли Танит',
//      genres: ['ужасы', 'мистика', 'приключения']
//    }
// ];

// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//    (genre, index, array) => array.indexOf(genre) === index
// );

// 17

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';

// const topRatedBooks = books.filter((book) => book.rating>= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// 18
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// const getUsersWithEyeColor = (users, color) => 
//   users.filter(user => user.eyeColor === color)

// 19
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) => 
//   users.filter(user => user.age >= minAge && user.age <= maxAge)

// 20
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// const getUsersWithFriend = (users, friendName) => 
//    users.filter(user => user.friends.includes(friendName))

// 21
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений

// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);

//   return allFriends.filter((friend, index, array) => array.indexOf(friend) === index)
// };

// 22
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// const getActiveUsers = (users) => {
//   return users.filter(({isActive}) => isActive);
// };

// 23
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// const getInactiveUsers = (users) => {
//   return users.filter(({isActive}) => !isActive);
// };

// 24

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';

// const bookWithTitle = books.find((book) =>book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) =>book.author === AUTHOR);

// 25
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// 26

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// 27
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

// const isEveryUserActive = (users) => {
//    return users.every(user => user.isActive)
// };

// 28 

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

// 29
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

// const isAnyUserActive = users => {
//    return users.some(user => user.isActive)
// };

// 30

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
// return previousValue + number}, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// 31

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
// return total + player.playtime / player.gamesPlayed}, 0);

// 32
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => {
//      return total + user.balance
//    }, 0)
// };

// 33
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

// const getTotalFriendCount = users => {
//   return users.reduce((total, user) => {
//      return total + user.friends.length
//    }, 0)
// };

// 34

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// 35

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// 36

// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт'
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// 37

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// 38
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

// const sortByAscendingBalance = users => {
//   return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// };

// 39
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// const sortByDescendingFriendCount = users => {
//   return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
// };

// 40
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

// const sortByName = users => {
//   return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
// };

// 41

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// 42
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

// const getNamesSortedByFriendCount = users => {
//   return [...users]
// .sort((firstFriend, secondFriend) => firstFriend.friends.length - secondFriend.friends.length)
// .map(user => user.name);
// };

// 43
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// const getSortedFriends = users => {
//   return [...users].flatMap((user) => user.friends).filter((friend, index, array) => array.indexOf(friend) === index).sort((firstfriend, secondFriend) => firstfriend.localeCompare(secondFriend));
// };

// 44
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0)
// };

