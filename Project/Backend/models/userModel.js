const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    clientID: {
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
    clientSecret: {
        type: String,
        required: true
    },





},
{timestamps:true}
)



module.exports=mongoose.model("Auth",authSchema)