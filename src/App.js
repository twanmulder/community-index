import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import ProfilePreview from './components/ProfilePreview'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <div style={{ height: "150vh" }}>
        <ProfilePreview></ProfilePreview>
      </div>
    </Layout>
  );
}

export default App;
