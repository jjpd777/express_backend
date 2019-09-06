const express = require("express")
const cors= require("cors")
const {User} = require("./models/User")
const {User} = require("./models/Carro")

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=> {
  res.send("Hello world")
})

app.post("/api/v1/create/user", (req,res)=> {
  const newUser = User(req.body)
  newUser.save((err,user)=>{
    !err ? res.status(201).send(user):
      res.status(409).send(err)
  })
})

app.get("/api/v1/get/user/:uid", (req,res)=> {
  User.findById(req.params.uid,(err,user) => {
    !err ? res.status(200).send(user) : res.status(404).send(err)
  })
})

app.put("/api/v1/modify/user/:uid", (req,res)=> {
  const userid = req.params.uid
  const data = req.body
  User.findByIdAndUpdate(userid,{$set: data},{new:true},(err,user) => {
    !err ? res.status(200).send(user) :
    res.status(404).send(err)
  })
})

// ###################### CARRO #########################

app.post("api/v1/create/carro/",(err,res) =>{
  const newcarro = Carro(req.body)
  newCarro.save((err,usr) =>{
    !err ? res.status(201).send(usr) :
    res.status(409).send(err)
  })
})

app.listen(PORT, (err) =>{
  if(!err){
    console.log(`Server on port ${PORT}`)
  }
})
