import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
// import { CheckBox } from "@mui/icons-material";
import { Box, Checkbox, List } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";

const Emails = () => {
  const { drower } = useOutletContext();
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const { type } = useParams();
  const getEmailService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin)

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type,refreshScreen]);

  
  const selectAllEmails = (e) => {
      if (e.target.checked) {
      const email = getEmailService?.response?.map((email) => email._id);
      console.log("email:selectAllEmails ", email);
      setSelectedEmails(email);
    } else {
      setSelectedEmails([]);
    }
  };
  const deleteSelectedEmails = (e) => {
    if(type==='bin'){

    }
    else{
        moveEmailsToBinService.call(selectedEmails)
    }
    setRefreshScreen(prev=>!prev)
  }

  return (
    <Box
      style={
        drower
          ? { marginLeft: 250, width: "calc(100% - 250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
        <DeleteOutline onClick={(e)=>deleteSelectedEmails(e)}/>
      </Box>
      <List>
        {getEmailService?.response?.map((email) => (
          <Email
            email={email}
            key={email._id}
            selectedEmails={selectedEmails}
          />
        ))}
      </List>
    </Box>
  );
};

export default Emails;
