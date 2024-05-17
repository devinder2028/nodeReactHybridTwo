// const http = require('http');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan')
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));

//const product = data.products[0];
const products = data.products;

const server = express();
//-------------------------------------------------------------
// Middleware

server.use(express.json());  // express.json is middleware

//morgan middleware-3rd party
//server.use(morgan('dev'))
server.use(morgan('default'))

server.use((req,res,next)=>{
    console.log(req.method,req.ip,req.hostname,new Date());
    console.log(req.get("User-Agent"));
    next()
})

//AUTH middleware  -------------------defining and creating
const auth = (req,res,next)=>{
    console.log("method",req.method)
    console.log("query name is ",req.query)
    
    /* 
    if(req.query.password==123){
        
        next()        //test in browser - localhost:8070?password=123
    }else{
        res.sendStatus(401); //unauthorized
    }
     */
    next()
}
// middlewares can be applied on specific route or on complete application

// server.use(auth)  //--applying on complete application level
                        //we can apply auth middleware for specific route also
//------------------------------------------------------------------

//  API ---ENDPOINT---ROUTE

// get request without and with auth 
/* 
server.get('/',(req,res)=>{    
    res.json({type:'GETa'})
})
 */
/* 
server.get('/',auth,(req,res)=>{    
    res.json({type:'GETa'})
})
 */


/* 
server.get('/product/:id',auth,(req,res)=>{    
    console.log(req.params);
    res.json({type:'GETa'})
})
 */

//REST API  ---------------------------------------------------

//Api ROOT , Base URL, ->example = google.com/api/v2/

//Read Api  GET  /products
server.get('/products',(req,res)=>{
    
    res.json(products);
})

//Read Api  GET  /products/:id
server.get('/products/:id',(req,res)=>{
    // console.log(req.params)
    // console.log(req.params.id)
    const myid = +req.params.id ;  //+ convert string to number

    const product = products.find(p=>p.id ===myid)
    res.json(product);
})

//CREATE API -- POST   /products
server.post('/products',(req,res)=>{
    console.log(req.body);
    
    products.push(req.body);

    res.json(req.body)
})

// UPDATE API --- PUT   /products/:id
server.put('/products/:id',(req,res) =>{
    const id = +req.params.id;

                            // find give copy not the original object
    // const product = products.find(p=>p.id===id);
    
    const productIndex = products.findIndex(p=>p.id===id)

    //  ...  -> spread operator -> new object created with previous data

         //splice(index,  how many delete,  "new value",)

    products.splice(productIndex,1,{...req.body,id:id})

    res.status(201).json();
});

// PATCH API --- PATCH   /products/:id
server.patch('/products/:id',(req,res) =>{
    const id = +req.params.id;

                            // find give copy not the original object
    // const product = products.find(p=>p.id===id);
    
    const productIndex = products.findIndex(p=>p.id===id)

    //  ...  -> spread operator

         //splice(index,  how many delete,  "new value",)

    const myitem = products[productIndex];

    products.splice(productIndex,1,{...myitem,...req.body})

    res.status(203).json();
});

// DELETE API --- DELETE   /products/:id
server.delete('/products/:id',(req,res) =>{
    const id = +req.params.id;

                            // find give copy not the original object
    // const product = products.find(p=>p.id===id);
    
    const productIndex = products.findIndex(p=>p.id===id)

    //  ...  -> spread operator -> new object created with previous data

         //splice(index,  how many delete,  "new value",)

    mydeltedItem = products[productIndex];
    products.splice(productIndex,1)

    res.status(205).json(mydeltedItem);
});
//----------------------------------------------------------------
// post request without and with auth middleware
/* 
server.post('/',(req,res)=>{    
    res.json({type:'POSTia'})
})
 */
server.post('/',auth,(req,res)=>{    
    res.json({type:'POSTia'})
})

server.put('/',(req,res)=>{    
    res.json({type:'PUT'})
})

server.delete('/',(req,res)=>{    
    res.json({type:'DELETE'})
})

server.get('/demo',(req,res)=>{    
    // res.send('<h1>helloji</h1>');
  // res.sendStatus(404);
    res.status(200).send("hello hru");
})
//------------------------------

//server.listen(8070);

server.listen(8070,()=>{
    console.log('server started by devinder at 8070')
})


