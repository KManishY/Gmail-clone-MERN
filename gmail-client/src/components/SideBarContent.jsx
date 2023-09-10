import styled from "@emotion/styled";
import { CreateOutlined } from "@mui/icons-material";
import { Box, Button,List, ListItem } from "@mui/material";
import React from "react";
import SIDEBAR_DATA from "../config/sidebar.config";

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

const SideBarContent = () => {
  return (
    <MainContainer>
      <ComposeButton variant="contained">
        <CreateOutlined />
        Compose
      </ComposeButton>

      <List>
        {SIDEBAR_DATA.map((data,key) => (
          <ListItem key={key}><data.icon/>{data.title}</ListItem>
        ))}
      </List>
    </MainContainer>
  );
};

export default SideBarContent;
