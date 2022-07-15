import React, { useState, useEffect} from 'react';
import Gallery from './components/Gallery1';
import Sidebar from './components/sidebar';
import './App.css';
import { BrowserRouter ,Routes, Route, Redirect } from 'react-router-dom';
function App() {
  
  return (
<>
        <Sidebar />  
        <Gallery className="gall" />         
</>
  );
}

export default App;
