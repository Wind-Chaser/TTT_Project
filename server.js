var express=require('express');
var app=express();
var request = require('request');
var gramophone = require("gramophone");
var bodyParser=require('body-parser');
app.use(bodyParser.json({strict:false}));
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname));
app.get('/find',function(req,res){
   var num=req.query.num;
   var arr=[];
   // request('http://terriblytinytales.com/test.txt')
   // .pipe(gramophone.stream())
   // .on('data', (chunk) => {
   //    arr.push(chunk);
   // }).on('end',()=>{
   //    res.send(arr);
   //    console.log(arr);

   // });      
   // request('http://terriblytinytales.com/test.txt')
   // .pipe(function(){})
   // .on('data', (chunk) => {
   // 		arr.push(chunk);
   // }).on('end',()=>{
   // 	   console.log(arr);

   // 		res.send(arr);
   // })
   //console.log(arr);
 //   var S = "";
 //   request('http://terriblytinytales.com/test.txt')
 //   .pipe(bl(function (err, data) { //  note 'new' isn't strictly required
 //      // `data` is a complete Buffer object containing the full data
 //      S = data.toString();
 //      console.log(typeof data);
 //      console.log(typeof data.toString());  
	// })).on('end', ()=>{
 //   		console.log(S, "ok");
 //   });
 	var req = request.get('http://terriblytinytales.com/test.txt', function(err, resp, body){
 		if (!err && resp.statusCode == 200) {
        	var H = body;
        	// Continue with your processing here.
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