const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://jjpd777:Juanjo2011!@cluster-boss-q1j97.mongodb.net/juanjo?retryWrites=true&w=majority"

mongoose.connect(DB_URL, {useNewUrlParser:true}, (err) => {
err ? console.log(err) :console.log("connection succesfull")});

const userSchema = new mongoose.Schema({
  name : {
    type : String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    unique: true,
    required: true
  },
  is_active:{
    type: Boolean,
    default: true
  },
})

const User = mongoose.model("User", userSchema)

module.exports = {User}
