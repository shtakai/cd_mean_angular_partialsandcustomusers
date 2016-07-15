angular.module('myApp').controller('userListsController',
  [
    'userFactory',
    function(userFactory) {
      console.log('user list C start');

      this.index = () => {
        console.log('_C index');
        userFactory.index((data) => {
          this.users = data;
        })
      }

    }
  ]
)
