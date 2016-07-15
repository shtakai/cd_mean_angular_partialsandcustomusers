
angular.module('myApp').controller('customizeUsersController',[
  'userFactory',
  '$location',
  function(userFactory, $location){
    console.log('customizeUsersController start');
    console.log('location', $location.url());

    this.index = () => {
      console.log('index start');
      console.log('location', $location.url());
      userFactory.index((data)=>{
        this.users = data;
      })
    }
    this.create = () => {
      console.log('C create');
      console.log('location', $location.url());
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
      console.log('location', $location.url());
      userFactory.delete(
        _user,
        (data) => {
          this.users = data;
          $location.url('/list')
        }
      )
    }

  }])
