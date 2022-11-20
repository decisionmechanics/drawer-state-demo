import axios from "axios";

const webService = axios.create({
  baseURL: "https://avenir-impact.olsworth.com/FG/",
  timeout: 3000,
});

export const fetchCountries = async () => {
  const response = await webService.get("/Countries");
  return JSON.parse(response.data);
};
