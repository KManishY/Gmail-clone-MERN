
import axios from 'axios';

const API_GMAIL = async (urlObjects,payload,type) => {
  console.log('payload: api.js ', payload);
  console.log('urlObjects: api.js ', urlObjects);
  const API_URL = "https://gmail-server-7mzp.onrender.com";

  return await axios({
    method: urlObjects.method,
    url: `${API_URL}/${urlObjects.endPoint}/${type}`,
    data: payload
  });
};

export default API_GMAIL;
