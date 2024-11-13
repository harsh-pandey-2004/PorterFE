import axios from 'axios';
import { BACKEND_URL } from '../constant';


const getPartner = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/users/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching user profile:", error.response?.data || error.message);
      return error;
    }
  };

  const updatePartner = async (data) => {
    try {
      const response = await axios.put(`${BACKEND_URL}/api/users/profile`,data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching user profile:", error.response?.data || error.message);
      return error;
    }
  };

  export {updateUser};