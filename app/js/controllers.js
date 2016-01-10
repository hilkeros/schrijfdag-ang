'use strict';

/* Controllers */

var SchrijfdagApp = angular.module('SchrijfdagApp', ['ngSanitize']);

SchrijfdagApp.controller('WorkshopsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('workshops.json').success(function(data) {
    $scope.workshops = data;
  });

  $scope.fillerClass = "col-md-6";
  $scope.workshopContainerClass = "col-md-6";
  $scope.unselectedPanel ="col-md-6";
  $scope.selectedWorkshop = null;

  $scope.toggleDetail = function(workshop){
    if ($scope.selectedWorkshop === workshop) {
      $scope.selectedWorkshop = null;
      $scope.fillerClass = "col-md-6";
      $scope.workshopContainerClass = "col-md-6";
      $scope.unselectedPanel ="col-md-6";
    } else {
      $scope.selectedWorkshop = workshop;
      $scope.fillerClass = "col-md-3";
      $scope.workshopContainerClass = "col-md-9";
      $scope.unselectedPanel ="col-md-4";
    }
  }

}]);

