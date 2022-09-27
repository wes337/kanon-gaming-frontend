import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchAllCountries = async () => {
  const url = `${API_URL}/country/all`;
  const results = await axios.get(url);
  return results;
};
