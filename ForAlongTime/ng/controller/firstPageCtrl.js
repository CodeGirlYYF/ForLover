app.controller('firstPageController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.greeting={
        num1:"好久不见了，还记得我吗？",
        num2:"记得我们第一次见面是什么时候吗？",
        num3:"如果想起了，就让我们一起打开接下来的密码，好吗？"
    }
    $scope.showSequence="one";
    $scope.check=false;
    $scope.beginCheck=function(){
        $scope.showSequence=false;
        $rootScope.currentChoosen="secondPage";
        $rootScope.secondPageDisplay='block';
        //var secondPage = document.getElementsByClassName('secondPage')[0];
        //secondPage.style.display='block';
    };
}]);