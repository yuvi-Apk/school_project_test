import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Admin from "../Pages/Admin";
import Login from "../Pages/Login";
import PublicDashboard from "../Pages/PublicDashboard";
import ConfirmBranch from "../Pages/ConfirmBranch";
import AddBranch from "../Pages/AddBranch";
import Create from "../Pages/Create.jsx";
import AdmissionForm from "./AdmissionForm";
import CreateFee from "../Pages/CreateFee.jsx"
import SectionManager from "../Pages/SectionManager";
import ClassManager from "../Pages/ClassManager";
import AttendanceCriteria from "../Pages/AttendanceCriteria";
import Configuefee from "../Pages/Configuefee.jsx"
import CreateAccount from "../Pages/CreateAccount";
import CreateFeesHeading from "../Pages/CreateFeesHeading";
import ConfigureFeesPlan from "../Pages/ConfigureFeesPlan";
import StudentSearchPage from "../Pages/StudentSearchPage";
import StudentProfile from "../Pages/StudentProfile";
import FeesReceipt from "./FeesReceipt.jsx";
import FeesRegister from "../Pages/Fees_Register.jsx";
const Navigation = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/public" element={<PublicDashboard />} />
        
        {/* Branch management routes */}
          <Route path="/add-branch" element={<AddBranch />} />
          <Route path="/Fees-Receipt" element={<FeesReceipt/>} />
        <Route path="/confirm-branch" element={<ConfirmBranch />} />
        <Route path="/Admission" element={<AdmissionForm/>}/>
        <Route path="/fees_Register" element={<FeesRegister/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/CreateFee" element={<CreateFee/>}/>
        <Route path="/ConfigueFee" element={<Configuefee/>}/>
        
        <Route path="/Std-Attendance" element={<AttendanceCriteria/>}/>
        <Route path="/ConfigureFeesPlan" element={<ConfigureFeesPlan/>}/>
        <Route path="/Create-Fees-Heading" element={<CreateFeesHeading/>}/>
        <Route path="/Create-Account" element={<CreateAccount/>}/>
        <Route path="/section-manager" element={<SectionManager />} />
        <Route path="/searchStudent" element={<StudentSearchPage/>}/>
        <Route path="/students/:id" element={<StudentProfile/>} />
  <Route path="/class-manager" element={<ClassManager />} />
  <Route path="/attendance-criteria" element={<AttendanceCriteria />} />
        {/* Admin route */}
        <Route path="/admin" element={<Admin />} />
        
        {/* Redirects */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default Navigation;