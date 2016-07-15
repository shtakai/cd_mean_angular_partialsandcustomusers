
angular.module('myApp').controller('customizeUsersController',[
  'userFactory', function(userFactory){
  console.log('customizeUsersController start');

  this.index = () => {
    console.log('index start');
    userFactory.index((data)=>{
      this.users = data;
    })
  }
  this.create = () => {
    console.log('C create');
    userFactory.create(
      this.firstName,
      this.lastName,
      this.language,
      (data) => {
        this.users = data;
      }
    );
  }

  this.delete = (_user) => {
    console.log('C delete');
    userFactory.delete(
      _user,
      (data) => {
        this.users = data;
      }
    )
  }

}])
