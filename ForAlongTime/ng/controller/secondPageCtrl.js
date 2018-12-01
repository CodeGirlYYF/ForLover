app.controller('secondPageController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.marks={
        head:"密码区",
        cancel:"清空",
        sure:"确定",
        mark:"提示：我们第一次见面的日子"
    };
    var temp=0;
    $scope.arr=[];
    $scope.clickAdd=function(num){
        temp++;
        if(temp==5){
            temp=1;
            $scope.clear();
        }
        $scope.arr[temp]=num;
        console.log($scope.arr[temp],temp);
    };
    $scope.clear=function(status){
        if(status){
            temp=0;
        }
        for(var i=1;i<=4;i++){
            $scope.arr[i]="";
        }
    };
    $scope.pwdCheck=function(){
        var password=$scope.arr.toString().replace(/,/g,"");
        console.log(password);
        if(password=='0530'){
            console.log("5月30号，就是这天，我第一次见到了你。");
            alert("5月30号，就是这天，我第一次见到了你!恭喜你，登录成功！");
        }else{
            alert("密码输入错误！");
        }
    };
}]);