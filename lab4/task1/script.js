const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){
    
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
}).listen(3000, function(){
    console.log("Server started at 3000, http://localhost:3000/lab4/task1/html/index.html");
});

