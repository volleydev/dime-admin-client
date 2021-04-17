import { request } from "../utils/request";

const apiBaseUrl = process.env.REACT_APP_API_URL;

export const postNewUser = async ({
  email,
  firebaseId,
}: {
  email: string;
  firebaseId: string;
}) => {
  const url = apiBaseUrl + "/user";
  try {
    const res = await request(url, {
      method: "POST",
      body: JSON.stringify({ email, firebaseId }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
