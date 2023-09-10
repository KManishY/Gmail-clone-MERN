import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const [openDrawer, setOpneDrawer] = useState(true);
  const toggledDrawer = () => {
    setOpneDrawer((openDrawer) => openDrawer);
  };
  return (
    <div>
      <Header toggledDrawer={toggledDrawer} />
      <Sidebar openDrawer={openDrawer} />
    </div>
  );
};

export default Main;
