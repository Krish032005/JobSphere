import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import CandidateProfile from './Components/CandidateProfile'
import SearchJobs from './Components/SearchJob'
import SavedJobs from './Components/SavedJobs'
import AppliedJobs from './Components/AppliedJobs'
import RecruiterProfile from './Components/RecruiterProfile'
import CreateJobPost from './Components/CreateJobPost'
import Applicants from './Components/Applicants'



const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/candidate/profile' element={<CandidateProfile/>} />
        <Route path='/candidate/search' element={<SearchJobs/>} />
        <Route path='/candidate/saved' element={<SavedJobs/>} />
        <Route path='/candidate/applied' element={<AppliedJobs/>} />

        <Route path='/recruiter/profile' element={<RecruiterProfile/>} />
        <Route path='/recruiter/post-job' element={<CreateJobPost/>} />
        <Route path='/recruiter/applicants' element={<Applicants/>} />
      </Routes>
  )
}

export default App