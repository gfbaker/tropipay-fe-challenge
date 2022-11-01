import React from 'react'
import { useState } from "react";
import { getUsers } from "../services/users";

export default function Search() {
    	//variable donde se almacena la busqueda del cliente
	const [user, setUser] = useState("");

	//llamada async para obtener datos del perfil del usuario
	const appToCard = async (e) => {
		e.preventDefault();
		const login = e.target.search.value;
		setUser(await getUsers(login));
		e.target.reset();
	};
  return (
    <>
    <header className="col s12">
        <div className="row col s12">
            <nav>
                <div className="nav-wrapper col s12">
                    <form onSubmit={appToCard}>
                        <div className="input-field">
                            <input id="search" type="search" name="search" required />
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search for a user</i>
                            </label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    </header>
    </>
  )
}
