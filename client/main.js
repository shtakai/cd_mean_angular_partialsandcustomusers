console.log('start');

class User{
  constructor(firstName=chance.first(), lastName=chance.last(), language=chance.word()){
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language;
  }
}



angular.module('myApp',['ngRoute']);

angular.module('myApp').config(($routeProvider)=> {
  console.log('configured');
  $routeProvider
    .when('/users', {
      templateUrl: 'partials/customizeUser.html',
      controller: 'customizeUsersController',
      controllerAs: 'c',
    })
    .when('/list', {
      templateUrl: 'partials/userList.html',
      controller: 'userListsController',
      controllerAs: 'c',
    })
    .otherwise({
      redirectTo: '/users'
    });
});

