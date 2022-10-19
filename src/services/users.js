import { ajax } from "../tools/ajax";

export const getUsers = async (data) => {
  const optionsRequest = {
    method: "GET",
    url: `https://api.github.com/users/${data}`,
  };
  return await ajax(optionsRequest);
};
