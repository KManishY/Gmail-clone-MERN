import React from "react";

import { AppBar, Box, InputBase, Toolbar, styled } from "@mui/material";
import { AccountCircleOutlined, AppsOutlined, HelpOutlineOutlined, Menu as MenuIcon,Search, SettingsOutlined, Tune } from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";
const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5F5",
  boxShadow: "none",
});

const SeacrhWrapper = styled(Box)({
    background:"#EAF1FE",
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    paddingLeft:20,
    paddingRight:20,
    height:48,
    display:"flex",
    alignItems: "center",
    justifyContent: "space-between",
    '&>div': {
        width:'100%',
        paddingLeft:'20px',
        paddingRight:'20px'
    },
})

const OptionWrapper =styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:"end",
    '&>svg':{
        marginLeft:20,
    }


})

function Header ({toggleDrawer}) {
  console.log('toggledDrawer: ', toggleDrawer);

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer} />
        <img src={gmailLogo} alt="Logo" style={{width:110,marginLeft:'15px'}}/>
        <SeacrhWrapper>
            <Search color="action"/>
            <InputBase placeholder="Search mail"/>
            <Tune color="action"/>
        </SeacrhWrapper>
        <OptionWrapper>
            <HelpOutlineOutlined color="action"/>
            <SettingsOutlined color="action"/>
            <AppsOutlined color="action"/>
            <AccountCircleOutlined color="action"/>
        </OptionWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
