import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Contact from './pages/Contact';
import TopDestinations from "./components/Destinations";
import JaipurPage from "./pages/JaipurPage";
import Help from './Help';
  import HawaMahalPage from "./components/HawaMahalPage";






function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<TopDestinations />} />
          <Route path="/jaipur" element={<JaipurPage />} />
          <Route path="/" element={<JaipurPage />} />
          <Route path="/help" element={<Help />} />
          
        

<Route path="/jaipur/hawa-mahal" element={<HawaMahalPage />} />

    
        
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
