
import axios from 'axios';

const API_GMAIL = async (urlObjects,payload,type) => {
  console.log('payload: api.js ', payload);
  console.log('urlObjects: api.js ', urlObjects);
  const API_URL = "http://localhost:8000";

  return await axios({
    method: urlObjects.method,
    url: `${API_URL}/${urlObjects.endPoint}/${type}`,
    data: payload
  });
};

export default API_GMAIL;
