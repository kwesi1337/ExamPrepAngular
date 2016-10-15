'use strict';

angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'angular-jwt',
    'ui.bootstrap',
    'myApp.view1',
    'myApp.view2'
]).
        config(['$routeProvider', function ($routeProvider){
                
                $routeProvider.otherwise({redirectTo: '/view1'});
}])

        .controller('appCtrl', function ($http, $scope){
            var show = false;
            $scope.users = [];
            $scope.u;
            if ($scope.users.length === 0){
                $http.get("Data/data.json").success(function (data){
                    $scope.users = data.users;
                });
            }
            
            $scope.details = function (es){
                
                for(var i = 0; i < $scope.users.length; i++){
                    
                    if ($scope.users[i].dob === es){
                        
                        $scope.u = $scope.users[i];
                    }
                }
                
                show = true;
            };
                    
                    $scope.show = function (){
                        
                        return show;
                    };
                    
                    $scope.return = function (){
                        show = false;
                        return show;
                        
                    }
});