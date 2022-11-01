import { useState } from "react";
import { getUsers } from "../services/users";
import Card from "./Card";
import Search from './Search'
import Repo from "../components/Repo";

export default function App() {
	//variable donde se almacena la busqueda del cliente
	const [user, setUser] = useState("");

	//llamada async para obtener datos del perfil del usuario
	const handleSearch  = async (e) => {
		e.preventDefault();
		const login = e.target.search.value;
		setUser(await getUsers(login));
		e.target.reset();
	};
	return (
		<>
			<Search handleSearch={handleSearch} />
			<Card userName={user} />
			<Repo userName={user.login} />
		</>
	);
}
