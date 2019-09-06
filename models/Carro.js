const mongoose = require("mongoose")
DB_URL = ""

mongoose.connect(DB_URL,{useNewUrlParser:True},(err)=>{
  err ? console.log(err) : console.log("connection succesfull")
})

const newCarrSchema = new mongoose.Schema({
  nombre : {
    type: String,
    unique: False,
    required: True
  },
  marca : {
    type : String,
    unique : False
  },
  precio : {
    type : Number,
  }
})

const Carro = mongoose.model("Carro",newCarrSchema)
module.exports = {Carro}
