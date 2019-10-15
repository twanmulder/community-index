import React from 'react';
import './App.css';
import ProfilePreview from './components/ProfilePreview/ProfilePreview'
import Layout from './components/Layout/Layout'
import Meta from './components/Meta/Meta'

function App() {
  return (
    <Layout>
      <Meta title="Home" />
      <div style={{ height: "150vh" }}>
        <ProfilePreview></ProfilePreview>
      </div>
    </Layout>
  );
}

export default App;
