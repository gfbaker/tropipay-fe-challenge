import { useState } from "react";
import { getUsers } from "../services/users";
import Card from "./Card";

export default function App() {
	const [user, setUser] = useState("");

	const appToCard = async (login) => {
		setUser(await getUsers(login));
	};
	return (
		<>
			<header className="col s12">
				<div className="row col s12">
					<nav>
						<div className="nav-wrapper col s12">
							<form
								onSubmit={(e) => {
									e.preventDefault();
									const login = e.target.search.value;
									appToCard(login);
									e.target.reset();
								}}
							>
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
			<Card userName={user} />
		</>
	);
}
