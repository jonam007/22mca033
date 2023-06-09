const mongoose = require('mongoose');

const dbcon = async()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://Manoj:Manoj123@cluster0.w4kekva.mongodb.net/");
        console.log(connect.connection.host);
    }catch(err){
        console.log(err);
    }
}



module.exports = dbcon