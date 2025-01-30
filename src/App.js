import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from './LandingPage';
import Courses from './Courses';
import CreatorDashboard from './creator/CreatorDashboard';
import CreatorCourses from './creator/CreatorCourses';
import AdminDashboard from './Admin/AdminDashboard';
import CourseModeration from './Admin/CourseModeration';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CreatorDashboard" element={<CreatorDashboard />} />
          <Route path="/CreatorCourses" element={<CreatorCourses />} />
          <Route path="/CourseModeration" element={<CourseModeration />} />


          {/* <Route path="/Appointment" element={<Appointment />} />
          <Route path="/MedicalRecords" element={<MedicalRecords />} />
          <Route path="/Billing&Payment" element={<BillPay />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
