import { ajax } from "../tools/ajax";

export const getTree = async (userName) => {
	const optionsRequest = {
		method: "GET",
		url: `https://api.github.com/repos/${userName}/mercadoLiebre/git/trees/master?recursive=1`,
	};
	return await ajax(optionsRequest);
};