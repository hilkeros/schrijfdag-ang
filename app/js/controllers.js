'use strict';

/* Controllers */

var SchrijfdagApp = angular.module('SchrijfdagApp', ['ngSanitize', 'ui.bootstrap']);

SchrijfdagApp.controller('VMWorkshopsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('workshopsVM.json').success(function(data) {
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

SchrijfdagApp.controller('NMWorkshopsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('workshopsNM.json').success(function(data) {
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

SchrijfdagApp.controller('VMLezingenCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('lezingenVM.json').success(function(data) {
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

SchrijfdagApp.controller('NMLezingenCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('lezingenNM.json').success(function(data) {
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

SchrijfdagApp.controller('VMInfosessiesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('infosessiesVM.json').success(function(data) {
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

SchrijfdagApp.controller('NMInfosessiesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('infosessiesNM.json').success(function(data) {
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

SchrijfdagApp.controller('FeedbackCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('feedback.json').success(function(data) {
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

SchrijfdagApp.controller('EnOokNogCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('enooknog.json').success(function(data) {
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

SchrijfdagApp.controller('OntdekCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('ontdek.json').success(function(data) {
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

SchrijfdagApp.controller('NavBarCtrl', function($scope) {
  $scope.isCollapsed = true;
});

