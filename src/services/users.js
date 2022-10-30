import { ajax } from "../tools/ajax";

//obtenemos los datos del perfil del usuario
export const getUsers = async (userName) => {
	const optionsRequest = {
		method: "GET",
		url: `https://api.github.com/users/${userName}`,
	};
	return await ajax(optionsRequest);
};
