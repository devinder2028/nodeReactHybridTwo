const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));

const product = data.products[0];

//format 
//const server = http.createServer((req,res)=>{..console.log("hello")...} )
//server.listen(8989)

const server = http.createServer((req,res)=>{
    console.log(req.url);

    switch(req.url){
        case '/':
            res.setHeader('Content-Type','text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(data));
            break;
        case '/product':
            res.setHeader('Content-Type','text/html');

            let modifiedIndex = index.replace('**title**',product.title )
            .replace('**url**',product.thumbnail)
            .replace('**rating**',product.rating)
            .replace('**price**',product.price)


            res.end(modifiedIndex);
            break;
        default:
            res.writeHead(404);
            res.end();
    }
})
console.log("server started")
server.listen(8075);
