// backend összekapcsolásához kell elvileg
import axios from 'axios';

export const getEvents = () => {
  return axios.get('http://localhost:5000/api/events'); // Adjust port as needed
};