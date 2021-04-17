export const request = (url: string, options?: RequestInit) =>
  fetch(url, {
    ...options,
    headers: {
      ...(options ? options.headers : {}),
      authorization: localStorage.getItem("idToken") || "",
    },
  });
