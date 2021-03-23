// const playlist = {
//    name: "my playlist",
//    rating: 5,
//    tracks: ['111', '222', '333'],
//    trackCount: 3,
//    // методы
//    getName() {
//       console.log("this is getName :)");
//    },
//    changeName(newName) {
//       // изменение имени

//       this.name = newName;
//    },
//    addTrack(track) {
//       // добавление
//       this.tracks.push(track);
//    },
//    updateRatinh(newRating) {
//       // перезаписываем новое значение
//       this.rating = newRating;
//    },
//    getTrackCount() {
//       // подсчет количества треков
//       return this.tracks.length;
//    },
// }

// // this - доступ к обькту

// playlist.changeName('New name');

// playlist.addTrack('new Track');
// console.log(playlist.getTrackCount());


//! перебор через for....in & object

//! for in - Не использовать

// const feedback = {
//    good: 5,
//    neutral: 10,
//    bad: 3,
// };

// let totalFeedback = 0;

// маасив ключей
// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//    console.log(key);
//    console.log(feedback[key]);
// }


// массив значений
// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//    console.log(value);

//    totalFeedback += value;
// }

// console.log(totalFeedback);


// ! РАботa с коллекцией (массивом обьектов) 

// const friends = [
//    { name: 'Mango', online: false },
//    { name: 'Kiwi', online: true },
//    { name: 'Poly', online: false },
//    { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//    console.log(friend);

//    friend.newprop = 555;
// }

// console.table(friends)

// !ищем по имени ----------------------

// const findFriendByName = function (allFriends, friendName) {
//    for (const friend of friends) {
//       console.log(friend.name);

//       if (friend.name === friendName) {
//          return 'Нашли ! ! ! !'
//       }
//    }

//    return 'Не нашли ! ! ! !'
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// !Получаем имена друзей -----------------------

// const getAllNames = function (allFriends) {
//    const names = [];
//    for (const friend of allFriends) {
//       console.log(friend.name);

//       names.push(friend.name);
//    }

//    console.log(names);
// };

// console.log(getAllNames(friends));


//! ПОлучаем имена друзей которіе онлайн --------------------

// const getOnlineFriends = function (allFriends) {
//    const onlineFriends = [];

//    for (const friend of allFriends) {
//       console.log(friend);
//       console.log(friend.online);

//       if (friend.online) {
//          onlineFriends.push(friend);
//       }
//    }

//    return onlineFriends;
//  };

// console.log(getOnlineFriends(friends));

 //! Пoлучаем имена друзей которіе  Heонлайн --------------------

// const getOfflineFriends = function (allFriends) {
//    const offlineFriends = [];

//    for (const friend  of allFriends) {
//       console.log(friend);
//       console.log(friend.online);

//       if (!friend.online) {
//          offlineFriends.push(friend);
//       } 
//    }

//    return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

 // ! корзина




