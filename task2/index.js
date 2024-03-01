const app = require('./app')
const http = require('http');
const port = process.env.PORT || 3000


app.set('port', 3000);

app.get('/', (request, response) => {

  console.log(`Requested URL: ${request.url}`);
  const filePath = request.url.substring(1);
  fs.readFile(filePath, function(error, data){
		
      if(error){

          response.statusCode = 404;
          response.end("Resource not found!");
      }   
      else{
          response.end(data);
      }
  });
});

app.listen(port,()=>console.log('server is on! link: http://localhost:3000/lab4/task1/html/index.html '))