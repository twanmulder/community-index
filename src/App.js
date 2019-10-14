import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import ProfilePreview from "./components/ProfilePreview"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <div style={{ height: "150vh" }}>
        <ProfilePreview></ProfilePreview>
      </div>
    </div>
  );
}

export default App;
