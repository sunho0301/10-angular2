'use strict';


var myApp = angular.module('MoviesApp', []);

myApp.controller('MoviesCtrl',['$scope', '$http', function($scope, $http){
    $scope.message = 'Hello World'; // a model for testing

    $http.get('data/movies-2015.json').then(function(response) {
        var data = response.data;
        $scope.movies = data;
    });
    
    // not perfectly working. fix code.
    $scope.ordering = '-gross'
    $scope.sortBy = function(order) {
        if($scope.ordering == order) {
            $scope.orderging = -order;
        } else {
            $scope.ordering = order;
        }
    }

    













    /*
    // sample data // one model
    $scope.movies = [
     { 
       title: "An Example Movie",
       released: "7/6/16",
       distributor: "INFO 343",
       genre: "Educational",
       rating: "PG",
       gross: 1000000,
       tickets: 30
     },
     { title: "Another Movie", released: "1/1/15", distributor: "Universal", genre: "Action", rating: "PG-13", gross: 1234567, tickets: 8901237 },
     { title: "Star Wars Ep. VII: The Force Awakens", released: "12/18/15", distributor: "Walt Disney", genre: "Adventure", rating: "PG-13", gross: 742208942, tickets: 88043765 }
    ];
    */



}]);