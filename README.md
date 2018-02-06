# TTT_Project

# index.html
  It includes frontend part and we enter some inputand Output is shown after sending request to server through AngularJS and server respond to it and send The top N words and their frequency of occurrence.Then they will shown in Tabular form.

  main.js and main.css is included in index.html file 

# main.css
  It includes CSS part for frontend.

# main.js      
  It includes JavaScript part. Request is send through $http service of AngularJS and after response is received it is shown in frontend through $scope service.

  ng-app directive used for starting application.
  ng-controller used for controlling application.
  
  var app = angular.module('myApp', []);

  It declared an application myApp module.

  app.controller('myCtrl',['$scope','$http', function($scope,$http) {
     .....   
  }]);
  It declared a controller studentController module.

  $scope service plays the role of joining controller with the views.
  $http service for reading data from remote servers.
  
  On click submit button in frontend
  $scope.submit=function (){

  };
  is called and in that $http service run 

  $http.get('/find?num='+$scope.value).then(function(response){
    document.getElementById('output').style="display:block;";
    $scope.details=response.data;
    },function(error){
      console.log("error in http request");
  });
  
  and response is show in tabular form in frontend.

# server.js
  Express.js framework of Node.js is used.Request module is used for requesting a file.When server accept a request, then they split the file according to space and count their occurences and send the response.

 	 var express=require('express');
 	 var app=express();
  It includes express module.

 	 var request = require('request');
  It includes request module.

  	app.use(express.static(__dirname));
  Its middleware to serve static files.

	  app.get('/find',function(req,res){
	    .....
	  });
  It is handing get request for route path, /find.

	  request.get('http://terriblytinytales.com/test.txt', function(err, resp, body){
	    .....	
	  });
  It is requesting a file of URL 'http://terriblytinytales.com/test.txt' and store data in body.

  var K = H.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );

  It just split the file according to space and filter out words only and remove white spaces.

	for(var i in K) {
	        if(!(K[i] in Hash))
	        Hash[K[i]] = 1
	    else
	        Hash[K[i]] += 1
	}
  It counts the frequency of occurences of words.

	for(var i in Hash) {
	    sorted.push([i, Hash[i]])
	}

	sorted.sort(function(a, b){
	    return -a[1] + b[1]
	});
   It sorts the array into decresing order of their frequency.	


  app.listen(process.env.PORT || 8080,function(){
    console.log("localhost at 8080",process.env.PORT);
  });

  
  It is listening to port no 8080 and process environment port no ,on environment it is running. 

AngularJS library is used for sending request and to show data in frontend.


Express and Request module is used in backend.


Hash Mapping concept is used to count occurences.      

# Some ScreenShots

![img1](https://raw.githubusercontent.com/Wind-Chaser/TTT_Project/master/images/1.png)
![img2](https://raw.githubusercontent.com/Wind-Chaser/TTT_Project/master/images/2.png)