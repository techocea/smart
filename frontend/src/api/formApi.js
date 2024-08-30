import axios from "axios";

const API_URL = "https://achievers-server.up.railway.app/api/contact";

export const contactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}`, formData);
    return response.data;
  } catch (err) {
    console.error("Error submittin the contact form", err);
    throw err.response.data;
  }
};
