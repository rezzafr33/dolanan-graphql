export const handleFetchError = (response) => {
  if (!response.ok) {
    throw Error (response.statusText);
  }
  return response;
};

export const handleSuccessFalse = (resJson) => {
  if (!resJson.success) {
    throw Error(resJson.message);
  }
  return resJson.data;
};

