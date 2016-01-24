angular.module('app').controller('ScheduleCtrl', function($scope, ScheduleFactory) {
  $scope.shortSchedule = ScheduleFactory.sendSchedule();
  $scope.navigateToTickeLink = ScheduleFactory.navigateToTickeLink;

  $scope.toggleDetail = function(game) {
    if (!game.isCollapsed) game.isCollapsed = true;
    else if (game.isCollapsed) game.isCollapsed = false;
  }
});
