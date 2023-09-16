import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Email from "../components/Email";
// import { Drawer } from "@mui/material";
// import SideBarContent from "../components/SideBarContent";

function Main() {
  const [drower, setDrower] = useState(true);

  const toggleDrawer = function(){
      setDrower(prevState=>!prevState);
  }


  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar drower={drower}/>
      <Email drower={drower}/>
    
    </>
  );
}

export default Main;
