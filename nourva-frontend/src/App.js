import Home from './Home.js';
import Navbar from './Navbar.js';
import Login from './Login.js';
import Signup from './Signup.js';
import UserInitiation from './UserInitiation.js';
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
          <Route path="/user-initiation" element={<UserInitiation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;