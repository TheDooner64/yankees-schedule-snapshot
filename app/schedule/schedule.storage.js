// ScheduleStorage service has responsibility of storing data
// It has some methods to retrieve, remove and filter our data
// In this service, we expose Chrome Storage API to store our data

// angular.module('app').service('ScheduleStorage', function($q) {
//   var self = this;
//   this.data = [];
//   this.findAll = function(callback) {
//     // chrome.storage.sync.get will return data in a callback
//     chrome.storage.sync.get('schedule', function(keys) {
//       if (keys.game != null) {
//         self.data = keys.game;
//         for (var i = 0; i < self.data.length; i++) {
//           self.data[i]['id'] = i + 1;
//         }
//         console.log(self.data);
//         callback(self.data);
//       }
//     });
//   }
//   this.sync = function() {
//     chrome.storage.sync.set({
//       game: this.data
//     }, function() {
//       console.log('Data is stored in Chrome storage');
//     });
//   }
//   this.add = function(newContent) {
//     var id = this.data.length + 1;
//     var game = {
//       id: id,
//       content: newContent,
//       completed: false,
//       createdAt: new Date()
//     };
//     this.data.push(game);
//     // synchronize our data to Chrome storage
//     this.sync();
//   }
// });
