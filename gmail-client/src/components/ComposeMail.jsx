import styled from "@emotion/styled";
import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  InputBase,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxheight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0"
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f3f6fc",
  "&>p": {
    fontSize: 14,
    fontWeight: 500
  }
});

const Recipient = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "&>div": {
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
    marginTop: 10
  }
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 15px",
  alignItems: "center"
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: 100
});

const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});

  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const config = {
    Host: "smtp.elasticemail.com",
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 2525
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "my1000088@gmail.com",
        Subject: data.subject,
        Body: data.body
      }).then((message) => alert(message));
    }
    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  return (
    <Dialog
      open={openDialog}
      onClose={false}
      PaperProps={{
        sx: dialogStyle
      }}
    >
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
      </Header>
      <Recipient>
        <InputBase name='to' placeholder="Recipient" onChange={(e) => onValueChange(e)} />
        <InputBase name='subject' placeholder="Subject" onChange={(e) => onValueChange(e)}/>
      </Recipient>
      <TextField
        multiline
        rows={28}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" }
        }}
        onChange={(e) => onValueChange(e)}
        name='body'
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutline onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
