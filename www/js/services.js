angular.module('benefitsApp.services', [])

.factory('DataFactory', function($http, $q, params) {
	var factory = {};
	factory.employees = function() {
		var deferred = $q.defer();
		$http.get(params.server+'/api/employees').then(function(employees) {
			deferred.resolve(employees);
		}, function(error) {
			deferred.resolve(error);
		});
		return deferred.promise;
	};
	factory.company = function() {
		var deferred = $q.defer();
		$http.get(params.server+'/api/company').then(function(company) {
			deferred.resolve(company);
		}, function(error) {
			deferred.resolve(error);
		});
		return deferred.promise;
	};
	return factory;
})

.factory('LoginFactory', function($http, $q, params) {
	var factory = {};
	factory.intuitLogin = function() {
		var deferred = $q.defer();
		$http.jsonp(params.server+'/intuit').then(function(success) {
			deferred.resolve('yay');
		}, function(error) {
			deferred.resolve(error);
		});
		return deferred.promise;
	};
	return factory;
})