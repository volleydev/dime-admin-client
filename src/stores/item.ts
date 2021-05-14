import { request } from "../utils/request";

const apiBaseUrl = process.env.REACT_APP_API_URL;

export const ITEMS = "ITEMS";

export interface ItemProps {
  name: string;
  description: string;
  price: number;
  id?: string;
}

export const get = async () => {
  try {
    const res = await request(apiBaseUrl + "/items", {
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const post = async (item: ItemProps) => {
  try {
    const res = await request(apiBaseUrl + "/item", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(item),
    });
    console.log(res);
    const data = await res.text();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
