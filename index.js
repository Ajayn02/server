require('dotenv').config()
const express=require('express')
const cors=require("cors")
const routes=require('./Routes/routes')
require('./connections/db')
// const jwt=require('./middlewares/jwtmiddleware')

const pfServer=express()

pfServer.use(cors())

//to configure json middleware to server to convert data from json to native
pfServer.use(express.json())

// pfServer.use(jwt)

pfServer.use(routes)

const PORT=3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})

pfServer.get('/',(req,res)=>{
    res.send('<h1>Welcome</h1>')
})

