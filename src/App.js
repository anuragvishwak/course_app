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

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Courses" element={<Courses />} />

          {/* <Route path="/Appointment" element={<Appointment />} />
          <Route path="/MedicalRecords" element={<MedicalRecords />} />
          <Route path="/Billing&Payment" element={<BillPay />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
