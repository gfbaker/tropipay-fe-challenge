import { ajax } from "../tools/ajax";

//pasamos la información de la busqueda del cliente para traer el usuario de Github
export const getUsers = async (userName) => {
	const optionsRequest = {
		method: "GET",
		url: `https://api.github.com/users/${userName}`,
	};
	return await ajax(optionsRequest);
};
