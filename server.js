var express=require('express');
var app=express();
var request = require('request');
app.use(express.static(__dirname));

app.get('/find',function(req,res){
    var num=req.query.num;
    var arr=[];
    request.get('http://terriblytinytales.com/test.txt', function(err, resp, body){
 		if (!err && resp.statusCode == 200) {
        	var H = body;
        	var Hash = new Object()
			var K = H.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } )
			for(var i in K) {
			        if(!(K[i] in Hash))
			        Hash[K[i]] = 1
			    else
			        Hash[K[i]] += 1
			}
			var sorted = []
			for(var i in Hash) {
			    sorted.push([i, Hash[i]])
			}

			sorted.sort(function(a, b){
			    return -a[1] + b[1]});

		}
		res.send(sorted.slice(0, num));
 	});
});

app.listen(process.env.PORT || 8080,function(){
    console.log("localhost at 8080",process.env.PORT);
});