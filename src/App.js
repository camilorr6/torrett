import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenomeContainer from './components/GenomeContainer/GenomeContainer';
import MyNavbar from './components/MyNavbar/MyNavbar';


function App() {

  return (
    <div className="App" sx={{backgroundColor: '#27292D'}}>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<GenomeContainer />} />
          <Route path="/username/:usernameId" element={<GenomeContainer />} />
          <Route path="/signIn" element={<GenomeContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
