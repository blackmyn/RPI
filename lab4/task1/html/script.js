import { createServer } from "http";
import { readFile } from "fs";
import path from "path";

const __dirname = path.resolve();

createServer(function(request, response) {
    console.log(`Requested URL: ${request.url}`);
    const filePath = path.join(__dirname, request.url.substring(1));
    readFile(filePath, function(error, data) {
        if (error) {
            response.statusCode = 404;
            response.end("Resource not found!");
        } else {
            response.end(data);
        }
    });
}).listen(3000, function() {
    console.log("Server started at 3000, http://localhost:3000/html/index.html");
});
