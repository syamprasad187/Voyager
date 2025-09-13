const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

//MongoDB connection

const dburl = "mongodb://localhost:27017/sdpproject1"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


//MongoDB Atlas Connection

// const dburl = "mongodb+srv://mahesh:mahesh@sdpcluster.xyyt1lc.mongodb.net/sdpproject1?retryWrites=true&w=majority&appName=SDPCluster"
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to MongoDB Atlas Successfully")
// }).catch((err) => {
//     console.log(err.message)
// });


const app = express() 
app.use(cors())
app.use(express.json())  // to parse JSON data

const adminrouter = require("./routes/adminroutes")
const studentrouter = require("./routes/studentroutes")t
const recruiterrouter = require("./routes/recruiterroutes")


app.use("",adminrouter)   // It  contains all the admin routes
app.use("",studentrouter) 
app.use("",recruiterrouter)


const port=2004
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})