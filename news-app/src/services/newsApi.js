import axios from "axios";

export const getNewsData = async () => {
  const response = await axios.get("/data.json");
  return response.data;
};
