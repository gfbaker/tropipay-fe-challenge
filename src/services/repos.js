import { ajax } from "../tools/ajax";

//traigo los repositorios del usuario
export const getRepos = async (userRepository) => {
	const optionsRequest = {
		method: "GET",
		url: `https://api.github.com/users/${userRepository}/repos`,
	};
	return await ajax(optionsRequest);
};
