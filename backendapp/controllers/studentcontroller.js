const Student = require("../models/Student")
const Job = require("../models/Job")
const JobApplicant = require("../models/JobApplicant")
const Event = require("../models/Event")

const multer = require('multer')
const path = require('path')
const fs = require('fs')

const insertstudent = async (request, response) => {
    try 
    {
      const input = request.body;
      const student = new Student(input);
      await student.save();
      response.send( 'Enrolled Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const checkstudentlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const student = await Student.findOne(input)
       response.json(student)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   const studentprofile = async (request, response) => 
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

    const updatestudentprofile = async (request, response) => 
  {
    try 
    {
      const input = request.body;
      const email = input.email; 
      const student = await Student.findOne({ email });
      if (!student) 
      {
        response.status(200).send('Student not found with the provided email id');
      }
      for (const key in input) 
      {
        if (key !== 'email' && input[key]) {
          student[key] = input[key];
        }
      }
      await student.save();
      response.status(200).send('Student Profile Updated Successfully');
    } 
    catch (e) 
    {
      response.status(500).send(e.message);
    }
  };

  const viewjobsbystudent = async (request, response) => 
 {
    try 
    {
      const jobs = await Job.find();
      if(jobs.length==0)
      {
        response.status(200).send("DATA NOT FOUND");
      }
      else
      {
        response.json(jobs);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const appliedjobs = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const appliedjobs = await JobApplicant.find({"studentemail":email});
      if(appliedjobs.length==0)
      {
        response.status(200).send("DATA NOT FOUND");
      }
      else
      {
        response.json(appliedjobs);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const applyjob = async (request, response) => {
    try 
    {
      const input = request.body;
      const alreadyapplied = await JobApplicant.findOne(input)
      if(!alreadyapplied)
      {
        const jobapplicant = new JobApplicant(input);
        await jobapplicant.save();
        response.status(200).send('Job Applied Successfully');
      }
      else
      {
        response.status(200).send('OOPS ... You have already applied for this Job');
      }
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './media/'); // Destination folder
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // File naming convention
    }
  });
  
  const upload = multer({ storage: storage }).single('file');
  

  const createevent = async (req, res) =>
  {
    try 
    {
      upload(req, res, async function (err) 
      {
        if (err) 
        {
          console.error(err);
          return res.status(500).send(err.message);
        }
        
        const { category, title, description, date, location } = req.body;
        const fileName = req.file ? req.file.filename : undefined; // Extracting file name
  
        const newEvent = new Event({
          category,
          title,
          description,
          date,
          location,
          file: fileName // Save only the file name
        });
  
        await newEvent.save();
        res.status(200).send('Event Created Successfully');
      });
    } 
    catch (error) 
    {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
  





  module.exports = {insertstudent,checkstudentlogin,updatestudentprofile,studentprofile,viewjobsbystudent,applyjob,appliedjobs,createevent}