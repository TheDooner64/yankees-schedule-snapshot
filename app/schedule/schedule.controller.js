angular.module('app').controller('ScheduleCtrl', function($scope, ScheduleFactory) {

  $scope.shortSchedule = ScheduleFactory.sendSchedule();

  $scope.navigateToTickeLink = ScheduleFactory.navigateToTickeLink;
});
