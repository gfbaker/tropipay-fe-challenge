import { ajax } from "../tools/ajax";


//traigo los repositorios del usuario
export const getRepos = async (user) => {
  const optionsRequest = {
    method: "GET",
    url: `https://api.github.com/users/${user}/repos`,
  };
  return await ajax(optionsRequest);
};
