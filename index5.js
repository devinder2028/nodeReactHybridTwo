// const http = require('http');
const express = require('express');
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));

//const product = data.products[0];
const products = data.products;

const server = express();

//------------------------------

// Middleware

//Whole application level middleware

//Logger middleware  -- this middleware acts on complete project level--directly created and applied

// earlier we use bodyParser now it is inbuilt in express
server.use(express.json());  // express.json is middleware

server.use((req,res,next)=>{
    console.log(req.method,req.ip,req.hostname,new Date());
    console.log(req.get("User-Agent"));
    next()
})

//AUTH middleware  -------------------defining and creating
const auth = (req,res,next)=>{
    console.log("method",req.method)
    console.log("query name is ",req.query)
    
    // if(req.query.password==123){
    if(req.body.password=='123'){
        
        next()        //test in browser - localhost:8070?password=123
    }else{
        res.sendStatus(401); //unauthorized
    }
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
server.get('/',auth,(req,res)=>{    
    res.json({type:'GETa'})
})

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
    // res.send('helloji');
    // res.send('<h1>helloji</h1>');
    // res.sendFile('C:/Users/DEVINDER/Desktop/coderDostNotCode/coderDostNodeSystem/index.html');

    //res.json(products);

    // res.sendStatus(404);
    res.status(200).send("hello hru");

})





//------------------------------

//server.listen(8070);

server.listen(8070,()=>{
    console.log('server started by devinder at 8070')
})


