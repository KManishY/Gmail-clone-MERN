import styled from "@emotion/styled";
import { Star, StarBorder } from "@mui/icons-material";
import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {routes} from "../routes/routes"
const Wrapper = styled(Box)({
  padding: "0 0 0 10px",
  background: "#f2f6fc",
  display: "flex",
  alignItems: "center",

  cursor: "pointer",
  "& > div": {
    display: "flex",
    width: "100%",
    "& > p": {
      fontSize: "14px"
    }
  }
});
const Indicator = styled(Box)({
  fontSize: "12px !important",
  textAlign: "center",
  background: "#ddd",
  color: "#222",
  padding: "0 4px",
  borderRadius: 4,
  marginRight: 6
});

const Date = styled(Typography)({
    marginLeft:'auto',
    marginRight:20,
    fontSize: 12,
    color:'#5F6368'
})
const Email = ({ email,selectedEmails }) => {
  const navigate = useNavigate()
  console.log("email: ", email);
  return (
    <Wrapper>
      <Checkbox size='small' checked={selectedEmails.includes(email._id)}/>
      {/* <Star /> */}
      <StarBorder fontSize="small" style={{ marginRight: 10 }} />
      <Box onClick = {()=> navigate(routes.view.path,{state:{email:email}})}>
        <Typography style={{width:'200px',overflow:'hidden',}}>{email.name}</Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject} {email.body && "-"} {email.body}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleString("default", {
            month: "long"
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
