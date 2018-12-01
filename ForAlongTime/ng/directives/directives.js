app.directive('navigation',function(){
    return {
        restrict:'A',
        templateUrl: function(elem,attr){
            var url='pages/navigation.html';
            return url;
        }
    }
});

app.directive('firstPage',function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl:function(elem,attr){
            var url='pages/firstPage.html';
            return url;
        }
    }
});

app.directive('secondPage',function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl:function(elem,attr){
            var url='pages/secondPage.html';
            return url;
        }
    }
});