const mongoose = require('mongoose')

const registerSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
   
    ownerName: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    },
    rollno: {
        type: Number,
        required: true
    },
    accessCode: {
        type: String,
        required: true
    },





},
{timestamps:true}
)



module.exports=mongoose.model("register",registerSchema)