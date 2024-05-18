import axios from "axios";

export const fetchLicevi = async () => {
  try {
    const response = await axios.get(`http://3.77.19.140:3000/leaderboard/?type=licevi`);
    console.log("Hello")
    return response.data
  } catch (error) {
    return error
  }
};
export const fetchKoremni = async () => {
  try {
    const response = await axios.get(`http://3.77.19.140:3000/leaderboard/?type=koremni`);
    return response.data
  } catch (error) {
    return error
  }
};

export const fetchKlekove = async () => {
  try {
    const response = await axios.get(`http://3.77.19.140:3000/leaderboard/?type=klekove`);
    return response.data
  } catch (error) {
    return error
  }
};
export const fetchKolelo = async () => {
  try {
    const response = await axios.get(`http://3.77.19.140:3000/leaderboard/?type=kolelo`);
    return response.data
  } catch (error) {
    return error
  }
};

