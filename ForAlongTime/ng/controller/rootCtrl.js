    var app=angular.module('myapp',[]);
    app.controller('RootController',['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.currentChoosen='firstPage';
        $rootScope.secondPageDisplay='block';
        //$rootScope.headText="密码区";
    }]);