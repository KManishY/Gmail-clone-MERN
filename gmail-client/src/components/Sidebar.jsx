import { Drawer } from "@mui/material";
import React from "react";
import SideBarContent from "./SideBarContent";

function Sidebar({drower}) {
  return (
    <Drawer
      anchor="left"
      open={drower}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant={"persistent"}
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          backgroundColor: "#F5F5F5",
          borderRight: "none",
          height: "calc(100vh-64px)"
        }
      }}
    >
      <SideBarContent />
    </Drawer>
  );
}

export default Sidebar;
