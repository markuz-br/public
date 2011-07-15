var http = require('http');

var req = http.request({
   'host' : 'mtgox.com',
   'path' : '/code/data/ticker.php',
   /*
   'host' : 'www.google.com',
   'path' : 'index.html',
   */
   },
   function(res){
      console.log('statusCode: ', res.statusCode);
      console.log('headers: ', res.headers);
      res.on('data', function(chuncks){
         process.stdout.write(chuncks);
   });
});
req.end();


req.on('error', function(e){
   console.error(e);
});

