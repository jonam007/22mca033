

const getTrains =(req,res)=>{
    res.status(200);
}

const registerTrain =(req,res)=>{
     const{companyName , ownerName , rollno ,ownerEmail,accessCode} = req.body;

      const res = axios.post()


}

const auth =(req,res)=>{
    res.send('auth');
}

const currentTrain =(req,res)=>{
    res.send('postTrains');
}

module.exports={getTrains,registerTrain,currentTrain}