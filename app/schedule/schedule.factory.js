angular.module('app').factory('ScheduleFactory', function() {
  var ScheduleFactory = {};

  // yankeesSchedule is a Global object saved to 'schedule.js' by a separate node process
  var fullRawSchedule = yankeesSchedule.events.game;

  // Constructor function to create clean games
  function Game(
    gameType,
    gameTimeET,
    venue,
    venueCity,
    homeTeamFull,
    awayTeamFull,
    homeTeamShort,
    awayTeamShort,
    tvBroadcast,
    radioBroadcast,
    ticketLink) {
    this.gameType = gameType;
    this.gameTimeET = gameTimeET;
    this.venue = venue;
    this.venueCity = venueCity;
    this.homeTeamFull = homeTeamFull;
    this.awayTeamFull = awayTeamFull;
    this.homeTeamShort = homeTeamShort;
    this.awayTeamShort = awayTeamShort;
    this.tvBroadcast = tvBroadcast;
    this.radioBroadcast = radioBroadcast;
    this.ticketLink = ticketLink;
    this.isCollapsed = true;
  }

  ScheduleFactory.sendSchedule = function() {
    var shortSchedule = [];
    var gameCounter = 0;
    var currentDate = Date.now() - 1; // Subtract 1 so it includes today's game

    console.log("Current date: ", currentDate);

    for (var i = 0; i < fullRawSchedule.length; i++) {
      var rawGame = fullRawSchedule[i];

      var year = rawGame.game_time_et.slice(0, 4);
      var month = parseInt(rawGame.game_time_et.slice(4, 6)) - 1;
      var day = rawGame.game_time_et.slice(6, 8);
      var timeOfDay = rawGame.game_time_et.slice(18);
      var hours = timeOfDay === 'AM' ? parseInt(rawGame.game_time_et.slice(9, 11)).toString() : (parseInt(rawGame.game_time_et.slice(9, 11)) + 12).toString();
      var minutes = rawGame.game_time_et.slice(12, 14);
      var seconds = rawGame.game_time_et.slice(15, 17);

      var cleanDate = new Date(year, month, day, hours, minutes, seconds);

      if (cleanDate > currentDate) {
        var cleanGame = new Game(
          rawGame.game_type,
          cleanDate,
          rawGame.venue_name,
          rawGame.venue_city,
          rawGame.home_name_full,
          rawGame.away_name_full,
          rawGame.home_name_abbrev,
          rawGame.away_name_abbrev,
          rawGame.broadcast_list_tv,
          rawGame.broadcast_list_radio,
          rawGame.ticket_link.tlink);

        shortSchedule.push(cleanGame);
        gameCounter++;
      }

      // Return the shortSchedule once it reaches 10 games
      if (gameCounter >= 10) return shortSchedule;

    }

    // Otherwise, return all of the remaining games
    return shortSchedule;
  }

  ScheduleFactory.navigateToTickeLink = function(game) {
    chrome.tabs.create({
      url: game.ticketLink
    });
  }

  return ScheduleFactory;
});
