import axios from "axios";

// Define the base URL for your Java Spring API
const BASE_URL = "http://localhost:8080"; // Change the URL to match your backend's URL

// Function to insert a user
export const insertUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/insert-user`, userData);
    return response.data; // Return the response data from the API
  } catch (error) {
    throw error; // Handle errors appropriately in your application
  }
};
