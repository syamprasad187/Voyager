//admin routes
const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter  = express.Router()


adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.delete("/deletestudent/:email",admincontroller.deletestudent)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)


adminrouter.post("/addrecruiter",admincontroller.addrecruiter)
adminrouter.get("/viewrecruiters",admincontroller.viewrecruiters)
adminrouter.delete("/deleterecruiter/:username",admincontroller.deleterecruiter)

adminrouter.get("/analysis",admincontroller.analysis)
adminrouter.get("/viewstudentprofile/:email",admincontroller.viewstudentprofile)



module.exports = adminrouter