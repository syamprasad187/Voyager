const Student = require("../models/Student");
const Admin = require("../models/Admin");
const Recruiter = require("../models/Recruiter");
const Job = require("../models/Job")
const JobApplicant = require("../models/JobApplicant")

 const viewstudents = async (request, response) => 
 {
    try 
    {
      const students = await Student.find();
      if(students.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(students);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const deletestudent = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const student = await Student.findOne({"email":email})
      if(student!=null)
      {
        await Student.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   const addrecruiter = async (request, response) => {
    try {
      const input = request.body;
      const recruiter = new Recruiter(input);
      await recruiter.save();
      response.send("Added Successfully");
    } catch (e) {
      response.status(500).send(e.message);
    }
  };


  const viewrecruiters = async (request, response) => {
    try {
      const recruiters = await Recruiter.find();
      if (recruiters.length == 0) {
        response.send("DATA NOT FOUND");
      } else {
        response.json(recruiters);
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
  
  const deleterecruiter = async (request, response) => {
    try {
      const uname = request.params.username;
      const recruiter = await Recruiter.findOne({ username: uname });
      if (recruiter != null) {
        await Recruiter.deleteOne({ username: uname });
        response.send("Deleted Successfully");
      } else {
        response.send("Username Not Found");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  const viewstudentprofile = async (request, response) => 
   {
      try 
      {
        const email = request.params.email
        const student = await Student.findOne({email})
        if(student)
        {
          response.json(student)
        }
        else
        {
          return response.status(200).send('Student not found with the provided email id');
        }
        
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    };

      
const analysis = async (req, res) => {
  try 
  {
      const jobCount = await Job.countDocuments();
      const jobApplicantCount = await JobApplicant.countDocuments();
      const selectedCount = await JobApplicant.countDocuments({ jobStatus: 'SELECTED' });
      const rejectedCount = await JobApplicant.countDocuments({ jobStatus: 'REJECTED' });
      const recruiterCount = await Recruiter.countDocuments();
      const studentCount = await Student.countDocuments();
      res.json({jobCount,jobApplicantCount,selectedCount,rejectedCount,recruiterCount,studentCount});
  } 
  catch (error) 
  {
      res.status(500).send(error.message);
  }
};

  


  

  module.exports = {viewstudents,deletestudent,checkadminlogin,addrecruiter,viewrecruiters,deleterecruiter,viewstudentprofile,analysis};