
angular.module('myApp').controller('customizeUsersController',[
  'userFactory', function(userFactory){
  console.log('customizeUsersController start');

  this.index = () => {
    console.log('index start');
    userFactory.index((data)=>{
      console.log('returned data', data);
      this.data = data;
    })
  }
  this.create = () => {
    console.log('C create');
    userFactory.create(
      this.firstName,
      this.lastName,
      this.language,
      (data) => {
        console.log(`returned data ${data}`);
        this.users = data;
      }
    );
  }

}])
