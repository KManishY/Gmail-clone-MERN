import styled from "@emotion/styled";
import { CreateOutlined } from "@mui/icons-material";
import { Box, Button,List, ListItem } from "@mui/material";
import React, { useState } from "react";
import SIDEBAR_DATA from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";

const ComposeButton = styled(Button)({
  backgroundColor: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none"
});
const MainContainer = styled(Box)({
    padding:8,
    '& > ul':{
        padding:'10px 0 0 5px',
        fontSize:14,
        fontWeight:500,
        cursor:'pointer',
    },
    '&> ul>li>svg':{
        marginRight:20,

    }

});

function SideBarContent ()  {

  const [openDialog,setOpenDialog]= useState(false);

  const onComposeClick = () => {
    setOpenDialog(true);
  };


  return (
    <MainContainer>
      <ComposeButton variant="contained" onClick={()=>onComposeClick()}>
        <CreateOutlined />
        Compose
      </ComposeButton>

      <List>
        {SIDEBAR_DATA.map((data,key) => (
          <ListItem key={key}><data.icon fontSize="small"/>{data.title}</ListItem>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </MainContainer>
  );
};

export default SideBarContent;
