import Home from './Home.js';
import Navbar from './Navbar.js';
import Login from './Login.js';
import Signup from './Signup.js';
import NutrientTracking from './NutrientTrackingComponents/NutrientTracking.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/nutrient-tracking" element={<NutrientTracking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;