import api from "./axiosConfig.js";

import { useToast, createStandaloneToast } from "@chakra-ui/react";
const { ToastContainer, toast } = createStandaloneToast();

// Define the base URL for your Java Spring API
const BASE_URL = "http://localhost:8080"; // Change the URL to match your backend's URL

// Function to insert a user
export const insertUser = async (userData) => {
  try {
    const response = await api.post("/api/v1/players/insertPlayer", userData);
    if (response.status == 201) {
      toast({
        title: "Successfully submitted!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Submission failed.",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    console.log(response);
  } catch (error) {
    toast({
      title: "Network error",
      description: "Please check your connection.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    console.log(error);
  }
};
