var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var Users = require('./models/users')

var app = express()
const PORT = 9001;
app.use(express.json())
mdb.connect("mongodb://localhost:27017/mydb").then(() => {
    console.log("Mongodb Connection Successful")
}).catch(() => {
    console.log("Check your sonnection string")
})

app.get('/', (req, res) => {
    res.json('Optimus Prime : Attention Autobots, Transform and Roll Out')
})


app.get('/json', (req, res) => {
    res.json({ name: 'Optimus Prime', quote: 'Finding peace in everything' })
})

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/html2', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

app.post('/signup',(req,res)=>{

    console.log(req.body)
    //var {firstName,lastName,email} = req.body
    //console.log(firstName,lastName,email)
    try{
        var newUser = new Users(req.body)
        newUser.save(req.body)
        console.log("User added successfully")
        res.status(200).send("User added successfully")
    }
    catch(err){
        console.log(err);
    }
})
    
app.get('/getsignup',async(req,res)=>{
    try{
       var allSignUpRecords = await Users.find()
       res.json(allSignUpRecords);
       console.log("All data are fetched")
    }
    catch(err){
        console.log(err)
    }
})

app.post('/login',async(req,res)=>{
    var {email,password}=req.body
    try{
       var existingUser=await Users.findOne({email:email})
       console.log(existingUser)
       if(existingUser){
        return res.status(404).json({ message: "User not found", isLoggedIn: false });
       }
    }
    catch(err){
        console.log(err)
    }
})


app.listen(PORT, () => {
    console.log('Backend Server Started')
})