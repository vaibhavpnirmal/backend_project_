const express =require('express')
const cors = require('cors')
const connectDB =require('./config/database')


const {userAuth,adminAuth}=require('./middleware/userAuth')
const User = require('./modules/user')


const app =express()

app.use(cors())

app.get("/",(req,res)=>{
res.send("working fine")
})

app.post('/signup', async (req,res)=>{

    const user =new User({
        firstName:"vaibhav",
        lastName:'Nirmal'
    })

    await user.save()
    res.send("user added successfully")
})

connectDB().then(()=>{
    console.log("Database Connect successfully")
    app.listen(7777,()=>{
        
        console.log("Listing on PORT 7777")
    })
}).catch((error)=>console.log(error))



//heohoefhoehfo