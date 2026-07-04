const express =require('express')
const cors = require('cors')

const app =express()

app.use(cors)

const post = 8787

app.get('/',(req,res)=>{

    res.end("Hello End")

})
app.post('/login',(req,res)=>{
    console.log(req)

})

app.listen(post,()=>{
    console.log("Listing on PORT 8787")
})