const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));

//const product = data.products[0];
const products = data.products;

const server = http.createServer((req,res)=>{
    console.log(req.url);      
    //console.log(req.url,req.method);      

    if(req.url.startsWith('/product')){
        //console.log(req.url)                         index   0       1       2   
        //console.log(req.url.split('/')); //output is array [ '', 'product', '3' ]

        const myid = req.url.split('/')[2];     
                                          //2 is 2nd index of array that is product id
        
        const myProduct = products.find(p=>p.id ===(+myid))   
                                                        //+ convert string to number
        console.log(myProduct)

        res.setHeader('Content-Type','text/html');

        let modifiedIndex = index.replace('**title**',myProduct.title )
                                .replace('**url**',myProduct.thumbnail)
                                .replace('**rating**',myProduct.rating)
                                .replace('**price**',myProduct.price)

        res.end(modifiedIndex);

        return;   //----server function ends  ( the outmost parent function end)
                // code after ending do not proceed to switch cases.
    }

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
