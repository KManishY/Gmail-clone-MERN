// import { Try } from "@mui/icons-material";
import API_GMAIL from "../services/api";
import { useState } from "react";

const useApi = (urlObjects) =>  {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const call = async (payload,type='') => {
    setResponse(null);
    setLoader(true);
    setError('');
    try {
      let res = await API_GMAIL(urlObjects,payload,type);
      setResponse(res.data);
    } catch (error) {
      console.log("error : ", error.message);
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };
  return { call, response, error, loader };
};

export default useApi;
