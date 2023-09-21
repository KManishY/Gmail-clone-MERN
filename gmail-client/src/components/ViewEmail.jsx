import { ArrowBack, Delete, Image, Person } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation, useOutletContext } from "react-router-dom";
import styled from "@emotion/styled";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const IconWrapper = styled(Box)({
  padding: 15,
  width: "calc(100%-260px)"
});
const SubjectWrapper = styled(Typography)({
  fontSize: 24,
  margin: "10px 0 20px 75px ",
  display: "flex",
  width: "calc(100%-260px)"
});

const Indicator = styled(Box)({
  fontSize: 12,
  padding: "2px 4px",
  marginLeft: 6,
  backgroundColor: "#ddd",
  color: "#222",
  borderRadius: 4,
  alignSelf: "center"
});
const ContainerWrapper = styled(Box)({
  marginLeft: 15,
  width: "100%",
  display: "flex",
  width: "calc(100%-260px)"
});

const DateEmail = styled(Box)({
  display: "flex",
  "&>p>span": {
    fontSize: 12,
    color: "#5E5E5E"
  }
});

const Date = styled(Box)({
  margin: "0 50px 0 auto",
  color: "#5E5E5E",
  fontSize: 12,

});

const ViewEmail = () => {
  const { drower } = useOutletContext();
  const { state } = useLocation();
  const { email } = state;
  const moveEmailToBinService = useApi(API_URLS.moveEmailsToBin)
  const deleteEmail =()=>{
      moveEmailToBinService.call([email._id]);
      window.history.back();
  }

  return (
    <Box
      style={
        drower
          ? { marginLeft: 250, width: "calc(100%-260px)" }
          : { width: "100%" }
      }
    >
      <IconWrapper>
        <ArrowBack
          onClick={() => window.history.back()}
          color="action"
          fontSize="small"
        />
        <Delete fontSize="small" color="action" style={{ marginLeft: 40 }} onClick={()=>deleteEmail()} />
      </IconWrapper>
      <SubjectWrapper>
        {email.subject}
        <Indicator component="span">Inbox</Indicator>
      </SubjectWrapper>
      <ContainerWrapper>
        <PersonIcon />
        <Box style={{ width: "100%" }}>
          <DateEmail>
            <Typography>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>

            <Date>
              {new window.Date(email.date).getDate()}&nbsp;
              {new window.Date(email.date).toLocaleString("default", {
                month: "long"
              })}
              &nbsp;
              {new window.Date(email.date).getFullYear()}
            </Date>
          </DateEmail>
          <Typography>{email.body}</Typography>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};

export default ViewEmail;
