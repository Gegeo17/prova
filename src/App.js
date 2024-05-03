import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer';
import Body from './Body';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Body/>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
