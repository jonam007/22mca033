const express = require("express")
const dbcon = require("./config/dbcon")
const app = express()
const dotenv = require("dotenv").config()
var cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(process.env.URI,require("../Backend/router/TrainsRoutes"))

dbcon();

let port = 5000
app.listen(port,()=>{
    console.log(`The Server is running in the Port`+port)
})
