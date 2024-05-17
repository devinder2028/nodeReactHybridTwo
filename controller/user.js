const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));

const users = data.users;

//function ----------------------------------------------------------------------------
const createUser = (req,res)=>{
    console.log(req.body);
    
    users.push(req.body);

    res.status(444);
    res.json(req.body)
}

const getAllUsers = (req,res)=>{
    
    res.json(users);
}

const getUser = (req,res)=>{

    const myid = +req.params.id ;  //+ convert string to number

    const user = users.find(p=>p.id ===myid)
    res.json(user);
}

const replaceUser = (req,res) =>{
    const id = +req.params.id;

   
    const userIndex = users.findIndex(p=>p.id===id)

    users.splice(userIndex,1,{...req.body,id:id})

    res.status(201).json();
}

const updateUser = (req,res) =>{
    const id = +req.params.id;
     
    const userIndex = users.findIndex(p=>p.id===id)

    const myitem = users[productIndex];

    users.splice(userIndex,1,{...myitem,...req.body})

    res.status(203).json();
}

const deleteUser = (req,res) =>{
    const id = +req.params.id;

    const userIndex = users.findIndex(p=>p.id===id)

    mydeltedItem = users[userIndex];
    users.splice(userIndex,1)  //like update 2nd parameter remove
                                    // but no 3rd parameter to add any thing

    res.status(205).json(mydeltedItem);
}

//
exports.deleteUser=deleteUser;
exports.createUser=createUser;
exports.replaceUser=replaceUser;
exports.updateUser=updateUser;
exports.getAllUsers=getAllUsers;
exports.getUser=getUser;