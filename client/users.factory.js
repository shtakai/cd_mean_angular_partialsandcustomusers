angular.module('myApp').factory('userFactory', function(){
  let factory = {};
  let _users = [];
  factory.index = (callback) => {
    console.log('test');
    callback('++callback++');
  }

  factory.create = (firstName, lastName, language, callback) => {
    console.log('F create');
    let _user = new User(firstName, lastName, language);
    console.log(`create user ${_user}`);
    _users.unshift(_user)
    callback(_users);
  }




  return factory;
})
