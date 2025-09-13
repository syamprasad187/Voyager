//student routes

const studentcontroller = require("../controllers/studentcontroller")

const express = require("express")
const studentrouter  = express.Router()

studentrouter.post("/insertstudent",studentcontroller.insertstudent)
studentrouter.post("/checkstudentlogin",studentcontroller.checkstudentlogin)
studentrouter.put("/updatestudentprofile",studentcontroller.updatestudentprofile)
studentrouter.get("/studentprofile/:email",studentcontroller.studentprofile)

studentrouter.get("/viewjobsbystudent",studentcontroller.viewjobsbystudent)
studentrouter.post("/applyjob",studentcontroller.applyjob)
studentrouter.get("/appliedjobs/:email",studentcontroller.appliedjobs)

studentrouter.post("/createevent",studentcontroller.createevent)




module.exports = studentrouter