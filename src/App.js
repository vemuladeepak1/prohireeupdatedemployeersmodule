import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


// import Categories from './HOME/categories';
// import Foot from './HOME/footer/foot';
// import Clients from './Clients';
// import Testimonials from './testimonials';
// import MembershipPlans from './Membership Plans';
import COMPANY_PROFILE from './For_Employers/COMPANY_PROFILE';
import POST_A_JOB from './For_Employers/POST_A_JOB';
import Manage_Jobs from './For_Employers/Manage_Jobs';
import Companies from './Pages/Companies';
import BrowseFilterGrid from './Pages/Browse_Jobs/BrowseFilterGrid';
import BrowseFilterList from './Pages/Browse_Jobs/BrowseFilterList';
import Navbar from './NavBar/NavBar';
import Home from './HOME/Home';
import SignIn from './NavBar/SignIn';
import SignUp from './NavBar/SignUp';

import MyProfile from './Students/MyProfile';
import MyResume from './Students/MyResume';
import AppliedJobs from './Students/AppliedJobs';
import JobAlerts from './Students/JobAlerts';
import SavedJobs from './Students/SavedJobs';
import ChangePassword from './Students/ChangePassword';
import AllJobs from './Pages/jobs/AllJobs';
import CompanyJobs from './Pages/jobs/CompanyJobs';
import DesignationJobs from './Pages/jobs/DesignationJobs';
import CategoryJobs from './Pages/jobs/CategoryJobs';
import SkillJobs from './Pages/jobs/SkillJobs';
import LocationalJobs from './Pages/jobs/LocationalJobs';
import Footer from './HOME/Footer';
import Applications from './For_Employers/Applications';
import ScrollToTop from './ScrollToTop';
import Jobdetailes from './Pages/Jobdetailes'
import Password from '../src/For_Employers/Password';
import Updatepost from './For_Employers/updatepost';

export const App = () => {
  return (
    <div>
    
   
   <BrowserRouter>
   <ScrollToTop />
   <div>
   <Navbar />
   <Routes>
   <Route path="/" exact element={<Home />} />
   <Route exact path="/signin" element={<SignIn />} />
   <Route exact path="/signup" element={<SignUp />} />
   <Route exact path="/jobdetailes/:id" element={<Jobdetailes />} />
   <Route exact path="/myprofile" element={<MyProfile/>} />
   <Route exact path="/myresume" element={<MyResume />} />
   <Route exact path="/appliedjobs" element={<AppliedJobs />} />
  <Route exact path="/jobalerts" element={<JobAlerts />} />
  <Route exact path="/savedjobs" element={<SavedJobs />} />
  <Route exact path ="/changepassword" element={<ChangePassword />} />
  <Route exact path="/company_profile" element={<COMPANY_PROFILE />} />
  <Route exact path="/Manage_jobs" element={<Manage_Jobs />} />
  <Route exact path="/Applications/:id" element={<Applications />}/>
  <Route exact path="/post_jobs" element={<POST_A_JOB />} />
  <Route exact path="/companies" element={<Companies />} />
  <Route exact path="/browsefilterlist" element={<BrowseFilterList/>} />
  <Route exact path="/browsefiltergrid" element={<BrowseFilterGrid />} />
  <Route exact path="/alljobs" element={<AllJobs />} />
  <Route exact path="/companyjobs" element={<CompanyJobs />} />
  <Route exact path="/designationjobs" element={<DesignationJobs />} />
  <Route exact path="/categoryjobs" element={<CategoryJobs />} />
  <Route exact path="/skilljobs" element={<SkillJobs />} />
  <Route exact path="/locationaljobs" element={<LocationalJobs />} />
  <Route exact path="/password" element={<Password />} />
  <Route exact path="/updatepost/:id" element={<Updatepost />} />
   </Routes>
   <Footer />
   </div>
   </BrowserRouter>

</div>
  )
}
export default App;