/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/


//This controller retrieves data from the usersService and associates it with the $scope
//The $scope is ultimately bound to the users view
app.controller('CustomersController', function ($scope, usersService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.users = usersService.getCustomers();
    }

    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        usersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        usersService.deleteCustomer(id);
    };
});

//This controller retrieves data from the usersService and associates it with the $scope
//The $scope is bound to the order view
app.controller('CustomerOrdersController', function ($scope, $routeParams, usersService) {
    $scope.user = {};
    $scope.exercisesTotal = 0.00;

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab userID off of the route        
        var userID = ($routeParams.userID) ? parseInt($routeParams.userID) : 0;
        if (userID > 0) {
            $scope.user = usersService.getCustomer(userID);
        }
    }

});

//This controller retrieves data from the usersService and associates it with the $scope
//The $scope is bound to the exercises view
app.controller('OrdersController', function ($scope, usersService) {
    $scope.users = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
   //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.users = usersService.getCustomers();
    }
});

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and exercisesTotal for a . Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('OrderChildController', function ($scope) {
    $scope.orderby = 'product';
    $scope.reverse = false;
    $scope.exercisesTotal = 0.00;

    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.user && $scope.user.exercises) {
            var total = 0.00;
            for (var i = 0; i < $scope.user.exercises.length; i++) {
                var order = $scope.user.exercises[i];
                total += order.orderTotal;
            }
            $scope.exercisesTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});


app.controller('UsersController', function ($scope, usersService) {
    init();

    function init() {
        
       $scope.users = usersService.getUsers();

    }
    $scope.insertExercise = function(){
        var musculo = $scope.newExercise.musculo;
        var descripcion = $scope.newExercise.descripcion;
        var peso = $scope.newExercise.peso;
        var fecha =  usersService.getFecha();
        usersService.insertExercise(id, musculo, descripcion, peso, fecha);
         
    }


    $scope.insertUser = function () {
        var name = $scope.newUser.name;
        var email = $scope.newUser.email;
        usersService.insertUser(name, email);
        $scope.newUser.name = '';
        $scope.User.email = '';
    };

    $scope.deleteUser = function (id) {
        usersService.deleteUser(id);
    };

});


//This controller retrieves data from the usersService and associates it with the $scope
//The $scope is bound to the order view
app.controller('userDetailController', function ($scope, $routeParams, usersService) {
    $scope.user = {};
    init();

    function init() {
        //Grab userID off of the route        
        var userID = ($routeParams.userID) ? parseInt($routeParams.userID) : 0;
        if (userID > 0) {
            $scope.user = usersService.getUser(userID);
        }
    }

});

app.controller('OrderExerciseController', function ($scope) {
    $scope.orderby = 'exercise';
    $scope.reverse = false;
    $scope.exercisesTotal = 0.00;   

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});

