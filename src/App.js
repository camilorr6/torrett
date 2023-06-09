import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenomeContainer from './components/GenomeContainer/GenomeContainer';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Landing from './components/Landing/Landing';
import SkillPage from './components/SkillPage/SkillPage';

function App() {

  return (
    <div className="App" sx={{backgroundColor: '#27292D'}}>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/api/bios/:usernameId" element={<GenomeContainer />} />
          <Route path="/signIn" element={<GenomeContainer />} />
          <Route path="/api/bios/:usernameId/:skillId" element={<SkillPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
