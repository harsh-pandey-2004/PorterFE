import axios from 'axios';
import { BACKEND_URL } from '../constant';


const getPartner = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/delivery-partner/profile`, {
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
      const response = await axios.put(`${BACKEND_URL}/api/delivery-partner/profile`,data, {
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

  const updateDetails = async (data) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/delivery-partner/profile`,data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching user profile:", error.response?.data || error.message);
      return error;
    }
  };

  

  export {updatePartner,getPartner,updateDetails};