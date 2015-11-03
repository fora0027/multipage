var app = angular.module('demoApp', ['ngRoute', 'LocalStorageModule']);

app.controller('MainCtrl', function ($scope, $route, $routeParams, $location, localStorageService) {
    if (localStorageService.isSupported) {
//        console.log('win!');
        if(localStorageService.get('lists') == null){
        localStorageService.set('lists', ['Ross', 'McKenzie', 'Justin']);
        }else{
        $scope.list1 = localStorageService.get('lists');
        //console.log($scope.list1);
        $scope.addItem = function () {
            if ($scope.list1Input == null || $scope.list1Input == "") {
                alert('You Cannot Create An Empty List Item');
            } else {
//                console.log($scope.list1Input);
                $scope.list1.push($scope.list1Input);
                $scope.list1Input = '';
                localStorage.setItem('lists', JSON.stringify($scope.list1));
            }
        }
    }
    }
    $scope.remove = function (list) {
        var index = $scope.list1.indexOf(list);
        $scope.list1.splice(index, 1);
        localStorage.setItem('lists', JSON.stringify($scope.list1));
    }
});

app.controller('ContactCtrl', function ($scope, $routeParams, localStorageService) {
    
    if (localStorageService.isSupported) {
//        console.log(localStorageService.get('food'));
        if(localStorageService.get('food') == null){
        
            localStorageService.set('food', ['Pizza', 'Chocolate', 'Hot Dog']);
        }else{
        
        $scope.list1 = localStorageService.get('food')
        //console.log($scope.list1);
        $scope.addItem = function () {
            if ($scope.list1Input == null || $scope.list1Input == "") {
                alert('You Cannot Create An Empty List Item');
            } else {
//                console.log($scope.list1Input);
                $scope.list1.push($scope.list1Input);
                $scope.list1Input = '';
                localStorage.setItem('food', JSON.stringify($scope.list1));
            }
        }
    }
    }
    $scope.remove = function (list) {
        var index = $scope.list1.indexOf(list);
        $scope.list1.splice(index, 1);
        localStorage.setItem('food', JSON.stringify($scope.list1));
    }
    
});

app.controller('page3Ctrl', function ($scope, $routeParams, localStorageService) {

if (localStorageService.isSupported) {
//        console.log('win!');
    if(localStorageService.get('places') == null)
    {
        localStorageService.set('places', ['Canada', 'Finland', 'England']);
    }else{
        $scope.list1 = localStorageService.get('places');
        //console.log($scope.list1);
        $scope.addItem = function () {
            if ($scope.list1Input == null || $scope.list1Input == "") {
                alert('You Cannot Create An Empty List Item');
            } else {
//                console.log($scope.list1Input);
                $scope.list1.push($scope.list1Input);
                $scope.list1Input = '';
                localStorage.setItem('places', JSON.stringify($scope.list1));
            }
        }
    }
}
    $scope.remove = function (list) {
        var index = $scope.list1.indexOf(list);
        $scope.list1.splice(index, 1);
        localStorage.setItem('places', JSON.stringify($scope.list1));
    }

});

app.config(function ($routeProvider, $locationProvider, localStorageServiceProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'MainCtrl'
        })
        .when('/contact-us', {
            templateUrl: 'contact-us.html',
            controller: 'ContactCtrl'
        })
        .when('/page3', {
            templateUrl: 'page3.html',
            controller: 'page3Ctrl'
        });
    localStorageServiceProvider
        .setPrefix('');

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});