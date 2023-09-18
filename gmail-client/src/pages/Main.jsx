import React, { Suspense, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";
import { Box } from "@mui/material";


function Main() {
  const [drower, setDrower] = useState(true);

  const toggleDrawer = function () {
    setDrower((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Box>
        <Sidebar drower={drower} />
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet context={{drower}} />
        </Suspense>
      </Box>
    </>
  );
}

export default Main;
