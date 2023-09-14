
import axios from 'axios';

const API_GMAIL = async () => {
  const API_URL = "https://localhost:8000";

  return await axios({
    method: "delete",
    url: `${API_URL}/endpoint`,
    data: {}
  });
};

export default API_GMAIL;
