# 🚀 Voyager – Campus Recruitment Management System

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1b5IK0syjbHK0Yul5kcUWzMbcVX-vJyje" alt="Logo" width="200"/>
</p>

**Voyager** is a dynamic web-based application designed to streamline the recruitment and placement process for **students, recruiters, and administrators**. The platform acts as a unified bridge connecting graduating students with prospective employers while providing administrators with powerful tools to manage the process efficiently.  

---

## 📌 Problem Statement  

Campus placements are often fragmented and inefficient, requiring separate communication channels and manual tracking. This results in:  
- Difficulty for students to find job opportunities tailored to their skills.  
- Lack of a centralized platform for recruiters to connect with talent.  
- Administrative challenges in managing students, recruiters, and job opportunities.  

---

## ✅ Solution  

**Voyager** solves this by offering an **all-in-one placement management system**.  
- **Students** can search and apply for jobs, track application statuses, and take mock placement tests.  
- **Recruiters** can post job opportunities, manage applicants, and share company resources.  
- **Admins** oversee the system by managing users, job listings, and overall authentication.  

The result is a **seamless recruitment process** that saves time, increases efficiency, and ensures better outcomes for students and employers alike.  

---

## 🎭 User Roles & Features  

### 👨‍💼 Admin  
- Secure login & authentication  
- Add recruiters and companies  
- Register students into the system  
- Manage job opportunities  

### 🧑‍🎓 Student  
- Register & manage profile  
- Browse and apply for job opportunities  
- View application/job status (selected/rejected)  
- Take **placement practice/mock tests**  
- Access company materials provided by recruiters  

### 🏢 Recruiter  
- Secure login with validation  
- Post job openings  
- View applied candidates  
- Update job status (selected/rejected)  
- Upload relevant company documents/materials  

---

## 🧩 Modules  

1. **Admin Module**  
   - Login, Add Recruiters, Add Students  

2. **Recruiter Module**  
   - Login, Post Jobs, View Applicants, Job Status, Upload Material  

3. **Student Module**  
   - Login, Profile Management, View Jobs, Apply Jobs, Job Status, Mock Tests  

---

## ✨ Key Features  

- 🔒 Role-based authentication (Admin, Student, Recruiter)  
- 📄 Centralized job postings and applications  
- 🧑‍💻 Mock tests for students to boost confidence  
- 📂 Document/material sharing from recruiters  
- 📊 Job status tracking for students and recruiters  

---

## 🛠️ Tech Stack  

### Frontend  
- **React.js** with **CSS & Bootstrap**  

### Backend
- **Node.js** & **Express.js**

### Database
- **MongoDB**  

### APIs
- REST API

### Architecture
- Monolithic / Microservices (scalable)

---

## 📂 Project Structure  

### Root Folder: `SDPProject`  
Contains two main applications:  

#### 🔹 Backend – `backendapp`
```
backendapp
┣ 📂controllers
┃ ┣ admincontroller.js
┃ ┣ recruitercontroller.js
┃ ┗ studentcontroller.js
┣ 📂models
┃ ┣ Admin.js
┃ ┣ Event.js
┃ ┣ Job.js
┃ ┣ JobApplicant.js
┃ ┣ Recruiter.js
┃ ┗ Student.js
┣ 📂routes
┃ ┣ adminroutes.js
┃ ┣ recruiterroutes.js
┃ ┗ studentroutes.js
┣ .env
┣ package.json
┗ Server.js
```
#### 🔹 Frontend – `frontendapp/demofrontendapp`  
```
frontendapp/demofrontendapp
┣ 📂public
┣ 📂src
┃ ┣ 📂admin
┃ ┣ 📂forepage
┃ ┣ 📂images
┃ ┣ 📂recruiter
┃ ┣ 📂student
┃ ┣ App.js
┃ ┣ config.js
┃ ┣ index.js
┣ package.json
┗ README.md
```

---

## 🚀 Getting Started  

### 1. Clone the repository  
```bash
git clone https://github.com/yourusername/SDPProject.git
cd SDPProject
```
### 2. Set Up Backend
```
cd backendapp
npm install
npm start
```
### 3. Set Up Frontend
```
cd frontendapp/demofrontendapp
npm install
npm start
```
### Future Enhancements

- **Video Interview Integration**: Implement a feature for conducting and recording video interviews directly within the platform.  
- **Microservices Migration for Scalability**: Refactor the application into microservices to improve scalability, maintainability, and deployment flexibility.
