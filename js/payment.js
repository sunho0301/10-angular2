'use strict';

var app = angular.module('PaymentApp', []);
app.controller('FormCtrl', ['$scope', function($scope) { 


	//a function to call when submitted
  $scope.submitForm = function(form){
  	if(form.$valid) {
  		window.alert('Payment info has been submitted!');
  	}
  	else {
  		window.alert('There was an error submitting your payment. Please check that your information is correct.');
  	}
  };
  
}]);
