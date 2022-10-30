import { ajax } from "../tools/ajax";

//obtenemos los datos del repositorio
export const getRepos = async (userRepository) => {
	const optionsRequest = {
		method: "GET",
		url: `https://api.github.com/users/${userRepository}/repos`,
	};
	return await ajax(optionsRequest);
};
