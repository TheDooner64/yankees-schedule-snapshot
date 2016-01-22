angular.module('app').controller('ScheduleCtrl', function($scope, ScheduleFactory) {
  $scope.shortSchedule = ScheduleFactory.sendSchedule();
  $scope.navigateToTickeLink = ScheduleFactory.navigateToTickeLink;

  $scope.isCollapsed = true;

  $scope.toggleDetail = function() {
    if ($scope.isCollapsed = true) $scope.isCollapsed = false;
    else if ($scope.isCollapsed = false) $scope.isCollapsed = true;
  }
});
