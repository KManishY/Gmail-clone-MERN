import { Drawer } from "@mui/material";
import React from "react";
import SideBarContent from "./SideBarContent";

const Sidebar = ({openDrawer}) => {
  console.log('openDrawer: ', openDrawer);

  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      varient="persistent"
      sx={
        {
            '& .MuiDrawer-paper':{
                marginTop: "64px",
                width:250,
                backgroundColor:"#F5F5F5",
                borderRight:"none",
                height: "calc(100vh-64px)"
            }
        }

      }
    >
        <SideBarContent/>
    </Drawer>
  );
};

export default Sidebar;
