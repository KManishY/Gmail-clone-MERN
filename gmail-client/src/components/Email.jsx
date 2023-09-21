import styled from "@emotion/styled";
import { Star, StarBorder } from "@mui/icons-material";
import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
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
  marginLeft: "auto",
  marginRight: 20,
  fontSize: 12,
  color: "#5F6368"
});
const Email = ({ email, selectedEmails, setRefreshScreen,setSelectedEmails }) => {
  const navigate = useNavigate();
  const toggleStaredService = useApi(API_URLS.toggleStarredEmail);
  // console.log("email: ", email);
  const toggleStaredMails = () => {
    toggleStaredService.call({ id: email._id, value: !email.starred });
    setRefreshScreen((prev) => !prev);
  };
  const onValueChange =()=>{
    if(selectedEmails.includes(email._id)){
      setSelectedEmails(prev=>prev.filter(id=> id!==email._id ))
    }
    else{
      setSelectedEmails(prev=>[...prev,email._id])
    }
  }
  return (
    <Wrapper>
      <Checkbox size="small" onChange={()=>onValueChange()} checked={selectedEmails.includes(email._id)  } />
      {/* <Star /> */}
      {email.starred ? (
        <Star
          fontSize="small"
          style={{ marginRight: 10, color: "#FFF200" }}
          onClick={() => toggleStaredMails()}
        />
      ) : (
        <StarBorder
          fontSize="small"
          style={{ marginRight: 10 }}
          onClick={() => toggleStaredMails()}
        />
      )}

      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        <Typography style={{ width: "200px", overflow: "hidden" }}>
          {email.name}
        </Typography>
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
