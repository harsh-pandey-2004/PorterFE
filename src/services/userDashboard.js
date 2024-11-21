import axios from 'axios';
import { BACKEND_URL } from '../constant';


const getUser = async () => {
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

  const updateUser = async (data) => {
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

  const createParcel = async (data) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/parcels/`,data, {
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

  const getParcel = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/parcels/`, {
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

  const trackParcel= async (trackingNumber)=>{
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/parcels/${trackingNumber}/track`
      );
      
      return response;
    } catch (error) {
      console.error("Error fetching user profile:", error.response?.data || error.message);
      return error;
    }
  }
  


export {getUser,updateUser,createParcel,getParcel,trackParcel};