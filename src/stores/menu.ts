import { request } from "../utils/request";

const apiBaseUrl = process.env.REACT_APP_API_URL;

export const get = async () => {
  try {
    const res = await request(apiBaseUrl + "/menus", {
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
