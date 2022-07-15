import React from 'react';
import { BsToggleOff, BsJustify } from "react-icons/bs";

function Sidebar() {
   return (
    <div className="sidenav">
    <a href="#"> <div className="logo1"><img src="../assets/logo.png" alt="Logo" style={{width: '100%' }}/></div></a>
   <div className="bar"><a href="#"><BsJustify/></a></div> 
   <div className="eng"><a href="#"><BsToggleOff/></a></div>
  </div>
   )
}

export default Sidebar;