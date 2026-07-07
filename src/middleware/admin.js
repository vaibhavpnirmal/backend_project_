const adminAuth = (req,res,next)=>{

    console.log("admin is autheticating ")
    const token ="admin"

    const isAuthenticate = token==="adminxx"

    isAuthenticate?next():res.status(401).send("not authorised")

}

module.exports={adminAuth}