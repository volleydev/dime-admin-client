import { request } from "../utils/request";

const apiBaseUrl = process.env.REACT_APP_API_URL;

export interface MenuProps {
  name: string;
  description: string;
  id?: string;
}

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

export const post = async (menu: MenuProps) => {
  try {
    const res = await request(apiBaseUrl + "/menu", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(menu),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
