import api from "./axiosConfig.js";

import { useToast, createStandaloneToast } from "@chakra-ui/react";
const { ToastContainer, toast } = createStandaloneToast();

// Define the base URL for your Java Spring API
const BASE_URL = "http://localhost:8080"; // Change the URL to match your backend's URL

// Function to insert a user
export const insertUser = async (userData) => {
  return await api.post("/api/v1/players/insertPlayer", userData);
};

export const getPlayers = async () => {
  const response = await api.get("/api/v1/players/getAllPlayers");
  let players = response.data;
  console.log(players);
  return players;
};
