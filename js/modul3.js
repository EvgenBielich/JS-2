const playlist = {
   name: "my playlist",
   rating: 5,
   tracks: ['111', '222', '333'],
   trackCount: 3,
   // методы
   getName() {
      console.log("this is getName :)");
   },
   changeName(newName) {

      this.name - newName;
   },
   addTrack(track) {
      this.tracks.push(track);
   }
}

playlist.changeName('New name');

playlist.addTrack('new Track');
console.log(playlist);