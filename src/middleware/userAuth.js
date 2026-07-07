

const userAuth=(req,res,next)=>{
    console.log(
        "user is getting checked "
    )
    const token ="xyzbbb"

const isAuthorised = token === "xyzbbb"

if(isAuthorised){
    next()
}else{
    res.status(401).send("user is not valid ")
}

}

const adminAuth = (req,res,next)=>{

    console.log("admin is autheticating ")
    const token ="admin"

    const isAuthenticate = token==="admin"

    isAuthenticate?next():res.status(401).send("not authorised")

}

module.exports={userAuth,adminAuth}
