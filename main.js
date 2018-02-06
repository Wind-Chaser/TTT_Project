var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope','$http', function($scope,$http) {
  $scope.submit=function(){
    $scope.error="";
  	if($scope.value){	
    $http.get('/find?num='+$scope.value).then(function(response){
        document.getElementById('output').style="display:block;";
        $scope.details=response.data;
        },function(error){
          console.log("error in http request");
    });
   }else{
   	$scope.error="Please enter the value first";
   	document.getElementById('output').style="display:none;";
   }
  }
}]);