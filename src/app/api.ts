import axios from "axios";
import { Countries, Spin } from "./types";

const API_URL = "https://kanon-gaming-assignment.herokuapp.com";

export const fetchAllCountries = async () => {
  const url = `${API_URL}/country/all`;
  const response = await axios.get(url);
  return response.data as Countries;
};

export const spinSlotMachine = async () => {
  const url = `${API_URL}/slot-machine/spin`;
  const response = await axios.get(url);
  return response.data as {
    spin: Spin;
    coins: number;
  };
};
