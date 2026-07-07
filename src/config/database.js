const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const moongoose = require('mongoose')

const connectDB = async ()=>{

    await moongoose.connect('mongodb+srv://vaibhavnirmal87_db_user:TS8qNNUOlzYhOfXb@cluster0.bswxey9.mongodb.net/?appName=Cluster0');
}

module.exports=
    connectDB